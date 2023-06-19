import { useEffect, useState } from "react";
import BaseDataGrid from "../Core/BaseDataGrid";
import { Grid, MenuItem, Paper, Select } from "@mui/material";

export default function Brand() {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("");
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/brand/list")
            .then(res => res.json())
            .then(res => setBrandData(res));

    }, [])

    useEffect(() => {
        if (brand) {
            fetch("http://localhost:8080/brand/prods?target=" + brand)
                .then((res) => res.json())
                .then((res) => setData(res))
        }
    }, [brand])

    function onChange(e) {
        setBrand(e.target.value)
    }

    const columns = [
        {
            dataField: "prodNm",
            caption: "상품명"
        }, {
            dataField: "prodDvsNm",
            caption: "상품구분"
        }, {
            dataField: "fasDvsNm",
            caption: "상세 구분"
        }, {
            dataField: "sellCnt",
            caption: "판매 수량"
        }
    ]
    return (
        <>
            <Paper style={{ boxShadow: "none" }}>
                <h3>브랜드별 상품</h3>
                <Grid container>
                    <Grid item xs={3}>
                        <Select value={brand ?? ""} fullWidth variant="outlined" onChange={(e) => onChange(e)}>
                            {
                                brandData.map(item => {
                                    return (
                                        <MenuItem key={item.brandCd} value={item.brandCd}>
                                            {
                                                item.brandNm
                                            }
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </Grid>
                </Grid>
            </Paper>
            <Paper>
                <BaseDataGrid data={data} height={650} columns={columns} />
            </Paper>
        </>

    )
}