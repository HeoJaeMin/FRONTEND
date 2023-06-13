import { CloseOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function DefaultPopFooter({closeOnly, btnName, onClick}){
    
    return (
        <Stack direction="row-reverse" spacing={2} sx={{ paddingTop: "10px" }}>
            <Button
                variant="outlined"
                startIcon={<CloseOutlined />}
                onClick={() => {
                    window.close();
                }}
            >
                닫기
            </Button>
            {closeOnly ? null : (
                <Button variant="outlined" onClick={onClick} startIcon={<SaveOutlined />}>
                    {btnName ? btnName : "저장"}
                </Button>
            )}
        </Stack>
    )
}