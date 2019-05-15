import React from 'react';

import CMPItemList from './cmp_List_Item';

const LeftPane = (props) => {
    // console.log('===left pane props===>', props);

    const cmpList = props.cmps.map((item, index) => (
        <CMPItemList item={item} key={index}/>
    ));

    return(
        <>
            {cmpList}
        </>
    )
}

export default LeftPane;