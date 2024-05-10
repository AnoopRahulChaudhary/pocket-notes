import AppName from './components/AppName'
import './App.css';
import AddNoteGroupButton from './components/NoteGroupDashboard/AddNoteGroupButton';
import NoteGroups from './components/NoteGroupDashboard/NoteGroups';
import { useDispatch, useSelector } from 'react-redux';
import NoteDashboard from './components/NoteDashboard';
import { hideNoteGroupCreator } from './actions/createNoteGroup';
import NoteGroupDashboard from './components/NoteGroupDashboard';

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
        <NoteGroupDashboard />
      </div>
      <div style={{width: '70vw'}}>
        {selectedNotesGroup && <NoteDashboard noteGroup={selectedNotesGroup}/>}
      </div>
    </div>
  );
}

export default App;
