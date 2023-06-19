import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import BaseDataGrid from "../Core/BaseDataGrid";

export default function Main() {

    const [top, setTop] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/brand/top?limit=3")
            .then((res) => res.json())
            .then(res => setTop(res));
    }, [])

    const topColumns = [
        {
            dataField: "brandNm",
            caption: "브랜드"
        },
        {
            dataField: "totSell",
            caption: "전체 판매수량"
        }
    ]
    return (
        <Paper sx={{ width: "100%", height: "100%", margin: "10px" }}>

            <Paper style={{ boxShadow: "none" }}>
                <h3>브랜드 Top3</h3>
            </Paper>
            <Paper>
                <BaseDataGrid data={top} height={320} columns={topColumns} />
            </Paper>
        </Paper>
    )
}