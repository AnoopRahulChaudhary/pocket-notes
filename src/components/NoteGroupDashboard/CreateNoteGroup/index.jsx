import React from "react";
import styles from "./index.module.css"
import { useDispatch } from "react-redux";
import { hideNoteGroupCreator } from "../../../actions/createNoteGroup";
import { addNoteGroup } from "../../../actions/noteGroup";

function CreateNoteGroup() {
    const dispatch = useDispatch();

    let groupData = {
        groupName : '',
        color : ''
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

        const formData = new FormData(event.target);
        groupData = {
            groupName : formData.get('groupName'),
            color : formData.get('color')
        }
        console.debug(JSON.stringify(groupData));

        if (!groupData.groupName) {
            alert('Group Name can\'t empty');
            return;
        }

        if (!groupData.color) {
            alert('Group color can\'t empty');
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
        
        dispatch(addNoteGroup(newNoteGroup));
        dispatch(hideNoteGroupCreator());
    }

    return (
        <div id="createNoteGroupContainer">
            <form onSubmit={(e) => addNewGroup(e)} className={styles.add_note_modal_container}>
                <div>
                    <p className={styles.create_new_group_text}>Create New group</p>
                </div>

                <div>
                    <label className={styles.group_name_text} htmlFor="group-name">Group Name</label>&nbsp;
                    <input className={styles.group_name_input} id="group-name" type="text" name="groupName" placeholder="Enter group name"/><br/>
                </div>

                <div style={{display: 'flex'}}>
                    <div><label className={styles.choose_color_text} htmlFor="colour">Choose colour</label></div>
                    <div className={styles.choose_color}>
                        <input style={{backgroundColor: '#B38BFA'}} type="radio" name="color" value="#B38BFA" />
                        <input style={{backgroundColor: '#FF79F2'}} type="radio" name="color" value="#FF79F2" />
                        <input style={{backgroundColor: '#43E6FC'}} type="radio" name="color" value="#43E6FC" />
                        <input style={{backgroundColor: '#F19576'}} type="radio" name="color" value="#F19576" />
                        <input style={{backgroundColor: '#0047FF'}} type="radio" name="color" value="#0047FF" />
                        <input style={{backgroundColor: '#6691FF'}} type="radio" name="color" value="#6691FF" />
                    </div>
                </div>

                <div className={styles.create_note_group_button_container}>
                    <input className={styles.create_note_group_button} type="submit" value="create" />
                </div>
            </form>
        </div>
        
    );
}

export default CreateNoteGroup;