import AppName from './components/AppName'
import './App.css';
import AddNoteGroup from './components/AddNoteGroup';
import NoteGroups from './components/NoteGroups';
import { useDispatch, useSelector } from 'react-redux';
import NoteDashboard from './components/NoteDashboard';
import { hideNoteGroupCreator } from './actions/createNoteGroup';

function App() {
  const selectedNotesGroup = useSelector(state => state.selectedNoteGroupReducer.name);
  const showCreateNoteGroup = useSelector(state => state.createNoteGroupReducer.show)
  const dispatch = useDispatch();

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
    <div style={{display: 'flex'}} className="App" onClick={handleClick}>
      <div style={{width: '30vw'}}>
        <AppName />
        <NoteGroups />
        <AddNoteGroup />
      </div>
      <div style={{width: '70vw'}}>
        {selectedNotesGroup && <NoteDashboard noteGroup={selectedNotesGroup}/>}
        {/* <NoteDashboard noteGroup="MyNotes" /> */}
      </div>
    </div>
  );
}

export default App;
