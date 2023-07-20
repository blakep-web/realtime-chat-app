import {Divider, Chip, Grid, TextField, Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = event => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = event => {
        setPassword(event.target.value);
    };

    return (
        <Grid container sx={{pb: 5}} rowSpacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <h1>Sign-In</h1>
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" placeholder="Email" label="Email" variant="outlined" onChange={emailChangeHandler} value={email} fullWidth />
            </Grid>
            <Grid item xs={12}> 
                <TextField type="password" placeholder="Password" label="Password" variant="outlined" onChange={passwordChangeHandler} value={password} fullWidth />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <Button sx={{width: {xs: "100%"}}} variant="contained" onClick={props.emailSignIn.bind(this, email, password)}>Sign-In</Button>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <Divider sx={{width: {xs: "100%"}}}>
                    <Chip label="OR" variant="outlined" />
                </Divider>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <Button sx={{color: "red", borderColor: "red"}} variant="outlined">
                    <GoogleIcon onClick={props.googleSignIn} />
                </Button>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <p>Don't have an account? Register <a href="" onClick={props.register}>HERE!</a></p>
            </Grid>
        </Grid>
    );
}

export default SignIn;