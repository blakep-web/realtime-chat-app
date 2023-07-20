import { useState } from "react";

import { auth, provider } from "../../firebase-config";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import SignIn from "./SignIn";
import Register from "./Register";

import { Box, Card, CardContent } from "@mui/material";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Auth = (props) => {
    const [register, setRegister] = useState(false);

    const { setIsAuth } = props;

    const signInWithEmail = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
            setRegister(false);
        } catch (err) {
            console.error(err);
        }
    };

    const registerWithEmail = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
            setRegister(false);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    const registerButtonHandler = (event) => {
        event.preventDefault();
        setRegister(true);
    };

    const signInButtonHandler = (event) => {
        event.preventDefault();
        setRegister(false);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card sx={{mt: "10%",width: {xs: "100%", sm: "60%", md: "40%"}}} >
                <CardContent>
                    {!register && <SignIn emailSignIn={signInWithEmail} googleSignIn={signInWithGoogle} register={registerButtonHandler} />}
                    {register && <Register emailRegister={registerWithEmail} signIn={signInButtonHandler}/>}
                </CardContent>
            </Card>
        </Box>  
    )

};

export default Auth;