import { useState } from "react";
import {Divider, Chip, Grid, TextField, Button } from "@mui/material";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = event => {
        setEmail(event.target.value);
        console.log(email);
    };

    const passwordChangeHandler = event => {
        setPassword(event.target.value);
    };

    return(
        <Grid container sx={{pb: 5}} rowSpacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <h1>Register</h1>
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" placeholder="Email" label="Email" variant="outlined" onChange={emailChangeHandler} value={email} fullWidth />
            </Grid>
            <Grid item xs={12}> 
                <TextField type="password" placeholder="Password" label="Password" variant="outlined" onChange={passwordChangeHandler} value={password} fullWidth />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <Button sx={{width: {xs: "100%"}}} variant="contained" onClick={props.emailRegister.bind(this, email, password)}>Register</Button>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                <p>Already have an account? Sign-In <a href="" onClick={props.signIn}>HERE!</a></p>
            </Grid>
        </Grid>
    )
}

export default Register;