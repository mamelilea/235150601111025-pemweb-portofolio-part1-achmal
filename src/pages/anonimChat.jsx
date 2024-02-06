import React, { useEffect, useState, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function generateRandomInitials() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomInitial = characters.charAt(Math.floor(Math.random() * characters.length));
    return randomInitial;
}

function anonimChat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [editMessage, setEditMessage] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [avatarInitials, setAvatarInitials] = useState('');
    const [db, setDb] = useState(null);

    const messageInputRef = useRef(null);

    useEffect(() => {
        if (messageInputRef.current) {
            messageInputRef.current.focus();
        }
        // Your Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDcdM2wXkgw7fIkuJ1smwWJb3wCiqoUEOo",
            authDomain: "crud-pesan.firebaseapp.com",
            projectId: "crud-pesan",
            storageBucket: "crud-pesan.appspot.com",
            messagingSenderId: "781291729430",
            appId: "1:781291729430:web:850c21a66c35e6ccd97b37"
        };

        const app = initializeApp(firebaseConfig);
        const firestoreDb = getFirestore(app);
        setDb(firestoreDb);

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestoreDb, 'message'));
                const fetchedMessages = querySnapshot.docs.map(doc => ({
                    key: doc.id,
                    messageText: doc.data().message,
                    avatarInitials: generateRandomInitials()
                }));
                setMessages(fetchedMessages);
            } catch (error) {
                console.error("Error getting data:", error);
            }
        };

        fetchData();
    }, []);





    const handleMessageSend = async () => {
        if (!newMessage) return;
        try {

            if (editMessage) { // Jika ada pesan yang sedang diedit
                await updateDoc(doc(db, 'message', editMessage.key), { message: newMessage });
                setEditMessage(null);

                // Perbarui state pesan dengan pesan yang telah diedit
                setMessages(prevMessages => {
                    const updatedMessages = prevMessages.map(message => {
                        if (message.key === editMessage.key) {
                            return { ...message, messageText: newMessage };
                        }
                        return message;
                    });
                    return updatedMessages;
                });
            } else {
                const docRef = await addDoc(collection(db, 'message'), { message: newMessage });
                const newMessageObj = { key: docRef.id, messageText: newMessage, avatarInitials: generateRandomInitials() };
                setMessages(prevMessages => [newMessageObj, ...prevMessages]);
            }
            setNewMessage('');
        } catch (error) {
            console.error("Error adding/updating document:", error);
        }
    };

    const handleEdit = (key) => {
        const messageToEdit = messages.find(message => message.key === key);
        setEditMessage(messageToEdit);
        setNewMessage(`${messageToEdit.messageText}`);
    };
    const handleDelete = async (key) => {
        // Implement delete functionality using the key (doc.id)
        try {
            setMessages(prevMessages => prevMessages.filter(message => message.key !== key));
            // Hapus dokumen dengan menggunakan key (doc.id)
            await deleteDoc(doc(db, 'message', key));
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };
    return (
        <div className='w-screen h-screen bg-slate-400 flex justify-center items-center'>
            <div className="card">
                <div className="chat-header">Anonymus Chat</div>
                <div className="chat-window">
                    {messages.slice().reverse().map((message) => (
                        <ul key={message.key} className="list-none p-3 flex gap-3">
                            <div>
                                <Avatar alt="" src={avatarUrl}>
                                    {message.avatarInitials}
                                </Avatar>
                            </div>
                            <div className='flex flex-col gap-1 justify-start w-max'>
                                <div id={`dataChat-${message.key}`} className='px-3 rounded-xl bg-slate-200 justify-center items-center flex'>{message.messageText}</div>
                                <div className='flex gap-1 mx-3'>
                                    <button className='w-max h-5 hover:text-cyan-900 hover:underline  justify-center items-center flex text-xs ' onClick={() => handleEdit(message.key)}>edit</button>
                                    <button className='w-max h-5 hover:text-cyan-900 hover:underline justify-center items-center flex text-xs' onClick={() => handleDelete(message.key)}>delete</button>
                                </div>
                            </div>
                        </ul>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        ref={messageInputRef}
                        type="text"
                        id="message-input"
                        className="message-input"
                        placeholder="Type your message here"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleMessageSend();
                            }
                        }}
                    />
                    <button className="send-button" onClick={handleMessageSend}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default anonimChat
