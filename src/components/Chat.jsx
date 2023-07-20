import classes from './Chat.module.css';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useState, useEffect } from 'react';

const Chat = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, 'messages');

    useEffect(() => {
        const queryMessages = query(
            messagesRef, 
            where("room", "==", room), 
            orderBy("createdAt")
        );
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const newMessageInputHandler = (event) => {
        setNewMessage(event.target.value);
    }

    const submitFormHandler = async (event) => {
        event.preventDefault();
        if (newMessage === "") return

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            userId: auth.currentUser.uid,
            room: room,
            //add id for message
        })

        setNewMessage("");
    };

    return (
        <>
            <div className={classes["chat-app"]}>
                <div className={classes.header}>
                    <h1>Welcome to: {room.toUpperCase()}</h1>
                </div>
                <div className={classes.messages}>
                    {messages.map((message) => {
                        return <div
                            className={message}
                            key={message.id}>
                            <span className={classes.user}>
                                {message.user}:
                            </span>
                            {message.text}
                        </div>
                    })}
                </div>
                <form onSubmit={submitFormHandler} className={classes["new-message-form"]}>
                    <input
                        className={classes["new-message-input"]}
                        placeholder='Type your message here'
                        type="text"
                        onChange={newMessageInputHandler}
                        value={newMessage}
                    />
                    <button type="submit" className={classes["send-button"]}>Send</button>
                </form>
            </div>
        </>
    );

};

export default Chat;