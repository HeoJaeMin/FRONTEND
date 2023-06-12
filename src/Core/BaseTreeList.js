import TreeList, {Column, SearchPanel} from "devextreme-react/tree-list";

export default function BaseTreeList({dataSource, keyExpr, parentIdExpr, columns, rootValue, refer }){

    const expandRows = () => {
        const instance = refer.current.instance;

        instance.forEachNode(function (node) {
            instance.expandRow(node.key);
        });
    };

    return (
        <TreeList
            dataSource={dataSource}
            showBorders={true}
            keyExpr={keyExpr}
            parentIdExpr={parentIdExpr}
            autoExpandAll={true}
            rootValue={rootValue}
            ref={refer}
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnAutoWidth={true}
            showColumnLines={true}
            showRowLines={true}
            rowAlternationEnabled={true}
            onNodesInitialized={expandRows}
        >
            <SearchPanel visible={false}/>
            {
                columns.map(item=>{
                    return <Column dataField={item.dataField} caption={item.caption} key={item.dataField} type={"string"}/>
                })
            }
        </TreeList>
    )
}