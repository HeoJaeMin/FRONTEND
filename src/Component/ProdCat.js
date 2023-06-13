import { useEffect, useRef, useState } from "react";
import BaseTreeList from "../Core/BaseTreeList";
import { Paper } from "@mui/material";
import CellComp from "../Core/CellComp";
import { popup } from "../Core/CoreFunc";

export default function ProdCat() {
    const [dataSource, setDataSource] = useState([]);
    const ref = useRef();

    useEffect(() => {
        fetch("http://localhost:8080/prod/search/cat?target=-1")
            .then(res => res.json())
            .then(res => {
                setDataSource(res);
            })
    }, [])

    const columns = [
        {
            dataField: "dvsNm",
            caption: "상품 구분",
            cellComponent: (e)=>{
                return (
                    <CellComp text={e.data.value} onClick={()=>{
                        popup("/popup/prodCat/detail?target="+e.data.data.dvsCd, 1200, 800);
                    }}/>
                )
            }
        }, {
            dataField: "pareDvsNm",
            caption: "상위 상품 구분"
        }, {
            dataField: "catCnt",
            caption: "상품 수"
        }, {
            dataField: "sellCnt",
            caption: "판매 수량"
        }
    ]
    const keyExpr = "dvsCd"
    const parentIdExpr = "pareDvsCd";

    return (
        <Paper>
            <BaseTreeList
                columns={columns}
                dataSource={dataSource}
                keyExpr={keyExpr}
                parentIdExpr={parentIdExpr}
                rootValue={-1}
                refer={ref}
                height={"800px"}
            />
        </Paper>
    );
}