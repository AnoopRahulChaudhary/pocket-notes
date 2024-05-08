import React, { useState } from "react";
import styles from "./index.module.css"
import { useDispatch } from "react-redux";

function AddNoteModal() {
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

    function getOldNoteGroupList() {
        const oldNoteGroupList = JSON.parse(localStorage.getItem("noteGroupList")) || [];
        return oldNoteGroupList;
    }

    function isNoteGroupPresent(noteGroupName){
        for(let noteGroup of getOldNoteGroupList()) {
            if (noteGroup.groupName === noteGroupName) {
                return true;
            }
        }
        return false;
    }

    function addNewNoteGroupToLocalStorage(newNoteGroup) {
        localStorage.setItem("noteGroupList", JSON.stringify([...getOldNoteGroupList(), newNoteGroup]));
    }
    
    function addNewGroup(event) {
        event.preventDefault();

        if (!groupData.groupName) {
            alert('Group Name can\'t empty');
            return;
        }

        if (isNoteGroupPresent(groupData.groupName)) {
            alert('This group is already present, please select alternate name');
            return;
        }

        const newNoteGroup = {
            groupName : groupData.groupName,
            color : groupData.color
        }

        addNewNoteGroupToLocalStorage(newNoteGroup);
        
        dispatch({
            type : 'ADD',
            payload: newNoteGroup
        })

        dispatch({
            type: 'HIDE_CREATE_NOTE_GROUP_CONTAINER'
        });
    }

    return (
        <div id="createNoteGroupContainer">
            <form onSubmit={(e) => addNewGroup(e)} style={{border: '1px solid black', padding: '10px'}} className={styles.add_note_modal_container}>
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
        </div>
        
    );
}

export default AddNoteModal;