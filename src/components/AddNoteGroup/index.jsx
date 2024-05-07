import React, { useState } from "react";
import AddNoteModal from "../AddNoteModal";

function AddNoteGroup() {
    const [showModal, setShowModal] = useState(false);


    return (
        <div>
            {showModal && <AddNoteModal />}
            <button onClick={() => setShowModal(!showModal)}>Add Note Group</button>
        </div>
    )
}

export default AddNoteGroup;