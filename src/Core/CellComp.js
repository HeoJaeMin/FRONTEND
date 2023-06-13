export default function CellComp({text, onClick}){
    return (
        <a href="/#" onClick={(e)=>{
            e.preventDefault();
            if(onClick && typeof onClick ==="function"){
                onClick(e);
            }
            
        }}>{text}</a>
    )
}