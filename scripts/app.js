document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            addNoteToList(noteText);
            noteInput.value = '';
        }
    });

    function addNoteToList(noteText) {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
    }
});