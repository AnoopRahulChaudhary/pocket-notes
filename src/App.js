import AppName from './components/AppName'
import './App.css';
import AddNoteGroup from './components/AddNoteGroup';
import NoteGroups from './components/NoteGroups';
import { useSelector } from 'react-redux';
import NoteDashboard from './components/NoteDashboard';

function App() {
  const selectedNotesGroup = useSelector(state => state.selectedNoteGroupReducer.name);

  return (
    <div style={{display: 'flex'}} className="App">
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
