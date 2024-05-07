export default function getNoteGroupShortName(noteGroupName) {
    console.debug(`Got note-group name to short - ${noteGroupName}`)
    const noteGroupNameArray = noteGroupName.split(" ");
    const firstCharOfFirstLetter = noteGroupNameArray[0].trim().slice(0, 1).toUpperCase();
    let firstCharOfSecondLetter = '';
    if (noteGroupNameArray.length > 1) {
        firstCharOfSecondLetter = noteGroupNameArray[1].slice(0, 1).toUpperCase();;
    }
    return firstCharOfFirstLetter+firstCharOfSecondLetter;
}