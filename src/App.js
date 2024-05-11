import AppName from './components/AppName'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NoteDashboard from './components/NoteDashboard';
import { hideNoteGroupCreator } from './actions/createNoteGroup';
import NoteGroupDashboard from './components/NoteGroupDashboard';
import BlankNotePage from './components/NoteGroupDashboard/BlankNotePage';
import { useMediaQuery } from 'react-responsive'

function App() {
  const selectedNotesGroup = useSelector(state => state.selectedNoteGroupReducer.selectedNoteGroup);
  const showCreateNoteGroup = useSelector(state => state.createNoteGroupReducer.show)
  const dispatch = useDispatch();
  const isMobileView = useMediaQuery({ maxWidth: 500 })

  console.debug('selectedNotesGroup '+ JSON.stringify(selectedNotesGroup))

  function hideNoteGroupAddPopup(clickedElement) {
      if (!showCreateNoteGroup){
        return;
      }

      if (!clickedElement.closest('#createNoteGroupContainer, #addNoteGroup')) {
        dispatch(hideNoteGroupCreator())
      }
  }

  function handleClick(event) {
    const element = event.target;
    hideNoteGroupAddPopup(element);
  }

  return (
    <div className="App" onClick={handleClick}>
      <div className="app_note_group_container">
        <AppName />
        <NoteGroupDashboard />
      </div>
      <div className="app_note_container">
        {!selectedNotesGroup && <BlankNotePage />}
        {selectedNotesGroup && <NoteDashboard noteGroup={selectedNotesGroup}/>}
      </div>
    </div>
  );
}

export default App;
