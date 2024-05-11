import React from "react";

function Note({content, createDate, createTime}) {
    return(
        <div>
            <p>{content}</p>
            <div style={{marginLeft: 'auto', marginTop: '10px'}}><span>{createDate}</span>&nbsp;&nbsp;.&nbsp;&nbsp;<span>{createTime}</span> </div>
        </div>
    );
}

export default Note;