import React from 'react'
import GridDrag from '../GridDrag/GridDrag'

function GridList({ dataList }) {
    return (
        <div>
            {dataList.map((data, index) => (
                <GridDrag data={data} key={index} />
            ))}
        </div>
    )
}

export default GridList
