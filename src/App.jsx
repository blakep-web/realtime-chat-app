import { useState, useRef } from 'react';

import Auth from './components/authentication/Auth';
import Chat from './components/Chat';

import { signOut } from "firebase/auth";
import { auth } from './firebase-config';

import { Container } from '@mui/material';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import classes from './App.module.css';

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const enterChatButtonHandler = (event) => {
    setRoom(roomInputRef.current.value);
  }

  const signOutHandler = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  return (
    <>
      <Container maxWidth="lg">
        {!isAuth && <Auth setIsAuth={setIsAuth}/>}
        {isAuth ? room ? (
          <Chat room={room} />
        ) : (
          <div className={classes.room}>
            <label htmlFor='roomInput'>Enter Room Name:</label>
            <input ref={roomInputRef} type="text" name="roomInput" id="roomInput" />
            <button onClick={enterChatButtonHandler}>Enter Chat</button>
          </div>
        ) : ""}
        {isAuth && 
          <div className={classes["sign-out"]}>
            <button onClick={signOutHandler}>Sign Out</button>
          </div>
        }
      </Container>
    </>
  )
}

export default App
