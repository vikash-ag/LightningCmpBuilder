import React from 'react';
import SplitPane from 'react-split-pane';

import LeftPane from './leftPane';
import RightPane from './rightPane';

const Body = (props) => {
    return(
        <>
            <div className="Body">
                <SplitPane split="vertical">
                    <div>
                        <LeftPane cmps={props.cmpList}/>
                    </div>
                    <div>
                        <RightPane/>
                    </div>
                </SplitPane>                
            </div>
        </>
    )
}

export default Body;