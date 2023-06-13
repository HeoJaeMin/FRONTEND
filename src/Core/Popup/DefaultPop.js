import { Grid } from "@mui/material";

export default function DefaultPop({
    title,
    content,
    footer
}){

    return(
        <>
            <Grid container spacing={0} sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        verticalAlign: "middle",
                        pl: 2,
                        display: "block",
                        boxSizing: "border-box",
                        fontSize: "1.2rem",
                        borderBottom: title && "1px solid #E5E5E5",
                        marginBottom: "10px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                    }}
                    component="div"
                >
                    {title}
                </Grid>
                <Grid item xs={12} sx={{ verticalAlign: "middle" }}>
                    {content}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        textAlign: "right",
                        pr: 2,
                        verticalAlign: "middle",
                        paddingTop: "15px",
                        marginTop: "10px",
                        paddingBottom: "15px",
                        borderTop: "1px solid #eee",
                    }}
                >
                    {footer}
                </Grid>
            </Grid>
        </>
    )
}