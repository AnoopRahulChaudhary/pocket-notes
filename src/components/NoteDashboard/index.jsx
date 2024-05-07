import React from "react";
import Heading from "./Heading";
import Notes from "./Notes";
import Footer from "./Footer";

function NoteDashboard({noteGroup}) {
    return (
        <div>
            <Heading noteGroup={noteGroup}/>
            <Notes noteGroup={noteGroup}/>
            <Footer noteGroup={noteGroup}/>
        </div>
    );
}

export default NoteDashboard;