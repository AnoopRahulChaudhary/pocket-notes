import React from "react";
import styles from './index.module.css'

function Note({content, createDate, createTime}) {
    return(
        <div className={styles.note_card}>
            <p className={styles.content}>{content}</p>
            <div className={styles.date_and_time}>
                <span>{createDate}</span>
                &nbsp;&nbsp;.&nbsp;&nbsp;
                <span>{createTime}</span> 
            </div>
        </div>
    );
}

export default Note;