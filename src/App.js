import AppName from './components/AppName'
import './App.css';
import AddNoteGroup from './components/AddNoteGroup';
import NoteGroups from './components/NoteGroups';

function App() {
  return (
    <div className="App">
      <AppName />
      <NoteGroups />
      <AddNoteGroup />
    </div>
  );
}

export default App;
