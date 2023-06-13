import TreeList, { Column, FilterRow, SearchPanel, Sorting } from "devextreme-react/tree-list";

/**
 * 
 * devExtreme tree-list
 * https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeList/ 
 * @returns 
 */
export default function BaseTreeList({ height, dataSource, keyExpr, parentIdExpr, columns, rootValue, refer }) {

    //Row 확장
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
            //Id
            keyExpr={keyExpr}
            height={height}
            //ParentId
            parentIdExpr={parentIdExpr}
            autoExpandAll={true}
            //Start ParentId
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
            <FilterRow visible={true} />
            <SearchPanel visible={true} />
            <Sorting mode={"single"} />
            {
                columns.map(item => {
                    return <Column
                        dataField={item.dataField}
                        caption={item.caption}
                        key={item.dataField}
                        cellComponent={item.cellComponent}
                    />
                })
            }
        </TreeList>
    )
}