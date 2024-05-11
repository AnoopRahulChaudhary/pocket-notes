import React from "react";
import styles from './index.module.css'

function AppName(){
    return(
        <div className={styles.app_name_container}>
            <span>Pocket Notes</span>
        </div>
    );
}

export default AppName;