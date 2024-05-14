export default function getNoteGroupShortName(noteGroupName) {
    console.debug(`Got note-group name to short - ${noteGroupName}`)
    const noteGroupNameArray = noteGroupName.split(" ");

    const firstCharOfFirstLetter = getCharAtIndex(noteGroupNameArray[0], 0).toUpperCase();
    
    let firstCharOfSecondLetter = '';
    const groupSubNamesCount = noteGroupNameArray.length;
    console.debug(`groupSubNamesCount - ${groupSubNamesCount}`);
    if (groupSubNamesCount > 1) {
        firstCharOfSecondLetter = getCharAtIndex(noteGroupNameArray[1], 0).toUpperCase();;
    }

    return firstCharOfFirstLetter+firstCharOfSecondLetter;
}

function getCharAtIndex(str, index) {
    return str.trim().slice(index, 1);
}