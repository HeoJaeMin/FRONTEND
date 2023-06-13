import { DataGrid } from "devextreme-react";
import { Column, FilterRow } from "devextreme-react/data-grid";

export default function BaseDataGrid({
    data,
    height,
    columns
}) {
    return (
        <DataGrid
            height={height}
            dataSource={data}
            showBorders={true}
            showRowLines={true}
            showColumnLines={true}
            rowAlternationEnabled={true}
        >
            <FilterRow visible={true} />
            {
                columns.map(item => {
                    return <Column
                        dataField={item.dataField}
                        caption={item.caption}
                        key={item.dataField ?? item.caption}
                        visible={item.visible ?? true}
                    />
                })
            }
        </DataGrid>
    )
}