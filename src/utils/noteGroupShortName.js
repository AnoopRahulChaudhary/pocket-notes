export default function getNoteGroupShortName(noteGroupName) {
    console.debug(`Got note-group name to short - ${noteGroupName}`)
    const noteGroupNameArray = noteGroupName.split(" ");
    const firstCharOfFirstLetter = noteGroupNameArray[0].trim().slice(0, 1).toUpperCase();
    let firstCharOfLastLetter = '';
    const groupSubNamesCount = noteGroupNameArray.length;
    console.debug(`groupSubNamesCount - ${groupSubNamesCount}`);
    if (groupSubNamesCount > 1) {
        firstCharOfLastLetter = noteGroupNameArray[groupSubNamesCount-1].slice(0, 1).toUpperCase();;
    }
    return firstCharOfFirstLetter+firstCharOfLastLetter;
}