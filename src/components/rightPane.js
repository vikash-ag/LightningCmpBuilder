import React from 'react';

import { Droppable } from 'react-drag-and-drop'

class RightPane extends React.Component {
    onDrop(data) {
        console.log('===ondrop called===>',data);
    }

    render() {
        return(
            <Droppable onDrop={this.onDrop.bind(this)}>
                Droppable div
            </Droppable>
        )
    }
}

export default RightPane;