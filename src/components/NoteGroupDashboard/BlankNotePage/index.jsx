import React from "react";
import note_app_logo from '../../../assets/note_app_logo_for_blank_page.png';
import lock_logo from '../../../assets/lock.png';
import styles from './index.module.css';

function BlankNotePage() {
    return (
        <div className={styles.blank_note_page_container}>
            <div className={styles.main_section}>
                <div><img className={styles.note_app_logo} src={note_app_logo} alt="note_app_logo" /></div>
                <div className={styles.pocket_notes_text}><span>Pocket Notes</span></div>
                <div className={styles.pocket_notes_description}>
                    <p>Send and receive messages without keeping your phone online.</p>
                    <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
            </div>
            
            <div className={styles.bottom_section}>
                <div><img src={lock_logo} alt="lock_logo"/></div> &nbsp;
                <div>end-to-end encrypted</div>
            </div>
        </div>
    );
}

export default BlankNotePage;