import { useEffect, useState } from "react";
import { getParameter } from "../Core/CoreFunc";
import BaseDataGrid from "../Core/BaseDataGrid";
import { Grid, Paper } from "@mui/material";
import DefaultPop from "../Core/Popup/DefaultPop";
import DefaultPopFooter from "../Core/Popup/DefaultPopFooter";

export default function ProdCatDtl() {

    const param = getParameter("target");

    const [data, setData] = useState([]);
    const [subtitle, setSubTitle] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/prod/search/cat/details?target=" + param)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }, [param])

    useEffect(() => {
        fetch("http://localhost:8080/prodDvs/search?target=" + param)
            .then(res => res.json())
            .then((res) => {
                setSubTitle("상품구분: " + res.prodDvsNm);
            })
    }, [param])

    const columns = [
        {
            dataField: "prodNm",
            caption: "상품명"
        },
        {
            dataField: "prodDvsNm",
            caption: "상품 구분"
        },
        {
            dataField: "fasDvsNm",
            caption: "상세 구분",
            visible: param.startsWith("01")
        },
        {
            dataField: "brandNm",
            caption: "브랜드"
        },
        {
            dataField: "sellCnt",
            caption: "판매 수량"
        }
    ];

    const content = <Paper>
        <Grid
            xs={12}
            sx={{
                verticalAlign: "middle",
                pl: 2,
                display: "block",
                boxSizing: "border-box",
                marginBottom: "10px",
            }}
            component="div"
        >
            {subtitle}
        </Grid>
        <BaseDataGrid data={data} height={"580px"} columns={columns} />
    </Paper>

    const footer = <DefaultPopFooter closeOnly/>

    return (
        <DefaultPop title={"상품 상세"} content={content} footer={footer}/>
    )
}