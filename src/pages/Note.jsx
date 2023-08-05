import { useState } from 'react';
import '../css/Note.css';

const Note = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({ name: '', phone: '', email: '' });

    const initialDate = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addNote = () => {
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        setNote({ name: '', phone: '', email: '' });
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className="note">
            <div className="note-block">
                <h3>Add contact</h3>
                <p>Name</p>
                <input type="text" name="name" value={note.name} onChange={(e) => initialDate(e)} />
                <p>Telephone</p>
                <input type="text" name="phone" value={note.phone} onChange={(e) => initialDate(e)} />
                <p>Email</p>
                <input type="text" name="email" value={note.email} onChange={(e) => initialDate(e)} />
                <button className="add" onClick={addNote}>Add</button>
            </div>
            <div className='list'>
                <h3>Contact List</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notes.map((item, index) => (
                        <tr key={index}>
                            <td><span>{item.name}</span></td>
                            <td><span>{item.phone}</span></td>
                            <td><span>{item.email}</span></td>
                            <td>
                                <button onClick={() => deleteNote(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Note;
