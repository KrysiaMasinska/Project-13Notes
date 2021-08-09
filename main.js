const wrapper = document.querySelector('.wrapper');
const addBtn = document.querySelector('.header_btn--add');
const deleteAllNotesBtn = document.querySelectorAll('.header_btn--delete');
const notes = document.querySelector('.notes');
const notesArea = document.querySelector('.notes__area');
const notesTemp = document.querySelector('.notes__temp');
const notesTitle = document.querySelector('.notes__title');
const notesDelete = document.querySelector('.notes__btn');
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
    const note = notesArea.content.cloneNode(true);
    note.querySelector('.notes__title').textContent = 'Notatka ' + num;
    note.querySelector('.notes__text').textContent = panelNoteTextarea.value;
    notes.appendChild(note);
    num++;
    console.log(note);
    cancelNotes();
}

const checkSelect = () => {
    if(panelNoteSelect.selectedIndex === 1){

    }
    else if(panelNoteSelect.selectedIndex === 2){

    }
    else if(panelNoteSelect.selectedIndex === 3){

    }
    else{

    }
}

// const deleteNote = () => {

// }

// notesDelete.addEventListener('click', deleteNote);
panelNoteSaveBtn.addEventListener('click', saveNote);
panelNoteCancelBtn.addEventListener('click', cancelNotes);
addBtn.addEventListener('click', addNote);