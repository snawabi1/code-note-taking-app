document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const clearButton = document.getElementById('clear');
    const notesContainer = document.getElementById('notes');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    addNoteButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title && content) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');

            const noteTitle = document.createElement('h2');
            noteTitle.textContent = title;
            noteElement.appendChild(noteTitle);

            const noteContent = document.createElement('p');
            noteContent.textContent = content;
            noteElement.appendChild(noteContent);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                notesContainer.removeChild(noteElement);
                deleteNoteFromStorage(title, content);
            });
            noteElement.appendChild(deleteButton);

            notesContainer.appendChild(noteElement);
            addNoteToStorage(title, content);

            clearInputs();
        } else {
                alert('Give your note a name and some content.');
        }
    });
clearButton.addEventListener('click', () => {
    clearInputs();
});


function addNoteToStorage(title, content) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ title, content});
    localStorage.setItem('notes', JSON.stringify(notes));
}

function deleteNoteFromStorage(title, content) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteIndex = notes.findIndex(note => note.title === title && note.content === content);
    if(noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}
function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesContainer.innerHTML = '';
    notes.forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        const noteTitle = document.createElement('h2');
        noteTitle.textContent = note.title;
        noteElement.appendChild(noteTitle);

        const noteContent = document.createElement('p');
            noteContent.textContent = note.content;
            noteElement.appendChild(noteContent);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            notesContainer.removeChild(noteElement);
            deleteNoteFromStorage(note.title, note.content);
        
        });
        noteElement.appendchild(deleteButton);

        notesContainer.appendChild(noteElement);
    });
}

    function clearInputs() {
        titleInput.value = '';
        contentInput.value = '';
}



    displayNotes();
});
