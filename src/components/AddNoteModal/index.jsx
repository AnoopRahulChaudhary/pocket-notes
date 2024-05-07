import React, { useState } from "react";
import styles from "./index.module.css"
import { useDispatch } from "react-redux";

function AddNoteModal(display) {
    const [groupData, setGroupData] = useState({
        groupName : '',
        color : ''
    });

    const dispatch = useDispatch();

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setGroupData({
            ...groupData,
            [name] : value
        })
    }
    
    function addNewGroup(event) {
        event.preventDefault();
        
        dispatch({
            type : 'ADD',
            payload: {
                groupName : groupData.groupName,
                color : groupData.color
            }
        })
        display = 'none';
    }

    return (
        <form onSubmit={(e) => addNewGroup(e)} style={{display: display}} className={styles.add_note_modal_container}>
            <p>Create New group</p>
            <label htmlFor="group-name">Group Name</label>
            <input id="group-name" onChange={e => handleChange(e)} type="text" name="groupName" value={groupData.groupName}/><br/>
            <label htmlFor="colour">Choose colour</label>
            <select id="colour" onChange={e => handleChange(e)} name="color" value={groupData.color}>
                <option value="#B38BFA">1</option>
                <option value="#FF79F2">2</option>
                <option value="#43E6FC">3</option>
                <option value="#F19576">4</option>
                <option value="#0047FF">5</option>
                <option value="#6691FF">6</option>
            </select><br/>
            <input type="submit" value="create" />
        </form>
    );
}

export default AddNoteModal;