import {useState} from "react";
import "../../styles/SignIn.css";
import { Button, ButtonGroup } from '@material-ui/core';

function SignInForm() {
    
    const [register, setRegister]= useState(false);

    function handleClick(event) {
        if (event.target.id === "register") return setRegister(true);
        if (event.target.id === "sign-in") return setRegister(false);
    }

    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleInput(event) {
        const {name, value} = event.target

        setAccount(prevInput => {
            return {
            ...prevInput,
            [name]: value
        }})
    }

    return (
        <div className=".sign-in-box">
        <ButtonGroup size="small" variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={handleClick} id="sign-in">Sign In</Button>
        <Button onClick={handleClick} id="register">Register</Button>
        </ButtonGroup>
        <form>
            <label for="name">Name</label><br/> 
            <input onChange={handleInput} name="name" type="text" value={account.name} /><br/>
            {register && <div><label for="email">Email Address</label><br/>
            <input onChange={handleInput} name="email" type="email" value={account.email} /><br/></div> }
            <label for="password">Password</label><br/>
            <input onChange={handleInput} name="password" type="password" value={account.password} /><br/>
            <Button variant="contained" color="primary">{register ? "Register" : "Sign In"}</Button>
        </form>
        </div>
        
    )
}

export default SignInForm;