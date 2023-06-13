import { ListItem, ListItemButton, ListItemText} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ManuItem({text, url}){

    const nav = useNavigate();
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                nav(url)
            }}>
                <ListItemText primary={text} sx={{textAlign: "center"}}/>
            </ListItemButton>
        </ListItem>
    )
}