const addBtn = document.querySelector('.header_btn--add');
const deleteAllNotesBtn = document.querySelector('.header_btn--delete');
const notes = document.querySelector('.notes');
const notesTemplate = document.querySelector('.notes__template');
const notesText = document.querySelector('.notes__text');
const panelNotes = document.querySelector('.panel-notes');
const panelNoteSelect = document.querySelector('.panel-notes__select');
const panelNoteTextarea = document.querySelector('.panel-notes__textarea');
const panelNoteError = document.querySelector('.panel-notes__error');
const panelNoteSaveBtn = document.querySelector('.panel-notes__btn--save');
const panelNoteCancelBtn = document.querySelector('.panel-notes__btn--cancel');

let num = 1;

const addNote = () => {
    panelNotes.style.display = 'flex';
}

const cancelNotes = () => {
    panelNotes.style.display = 'none';
    panelNoteTextarea.value = '';
    panelNoteSelect.selectedIndex = 0;
    panelNoteError.style.visibility = 'hidden';
}

const saveNote = () => {
    if (panelNoteTextarea.value === "" || panelNoteSelect.selectedIndex === 0) {
        panelNoteError.style.visibility = 'visible';
    } else {
        const note = notesTemplate.content.cloneNode(true);
        note.querySelector('.notes__area').setAttribute('id', num)
        note.querySelector('.notes__btn').setAttribute('onclick', `deleteNote(${num})`)
        note.querySelector('.notes__title').textContent = 'Notatka ' + num;
        note.querySelector('.notes__text').textContent = panelNoteTextarea.value;
        notes.appendChild(note);
        num++;
        cancelNotes();
    }

}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    notes.removeChild(noteToDelete);
}

const deleteAllNotes = () =>{
    const allNotes = document.querySelector('.notes__area');
    allNotes.textContent = '';
}

deleteAllNotesBtn.addEventListener('click', deleteAllNotes);
panelNoteSaveBtn.addEventListener('click', saveNote);
panelNoteCancelBtn.addEventListener('click', cancelNotes);
addBtn.addEventListener('click', addNote);