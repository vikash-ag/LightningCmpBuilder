import React from 'react';
import { Draggable } from 'react-drag-and-drop';

const CMPItemList = ({item}) => {    
    // console.log('===CMP List Item item===>', item);

    return(
        <>
            <Draggable className="draggable" data={item.name}>
                {item.name}
            </Draggable>
        </>
    )

}

export default CMPItemList;