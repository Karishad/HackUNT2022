import React, {useState} from "react";
import ReactDOM from "react-dom";

function Sign_In() {

const [errorMessages,setErrorMessages] = useState({});
const[isSubmitted,setIsSubmitted] = useState(false);

const database = [
    {
        username: "user1",
        password: "pass1"
     },
     {
         username: "user2",
         password: "pass2"
     }
];

const errors = {
    user: "invalid username",
    pass: "invalid password"
};


const rendorErrorMessage = (name) =>
    name === errorMessages.name && (<div className = "error">{errorMessages.message}</div>
);

const handleSubmit = (event) => {
    event.preventDefault();

    var {user,pass} = document.forms[0];

    const userData = database.find((user)=> user.username == user.value)

    if (userData)
    {
        if (userData.password != pass.value)
        {
            setErrorMessages({name: "pass", message: errors.pass})
        }
        else
        {
            setIsSubmitted(true);
        }
    }
    else
    {
        setErrorMessages({name: "uname", message:errors,uname});
    }
};


const Form = (
    <div className="form">
        <h1>Movies</h1>
        <form onSubmit={handleSubmit}>
            <div className = "input">
            <label>Username</label>
            <input type = "text" name="user" required/>
            {renderErrorMessage("Username is required.")}
            </div>

            <div className = "input">
            <label>Password</label>
            <input type = "text" name="password" required/>
            {renderErrorMessage("Password is required.")}
            </div>

            <div className = "button">
                <input type= "submit" />
                
            </div>
        </form>
    </div>
);

return(
    <div className="app">
    <div className="form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Welcome</div> :rendorForm}
    </div>
    </div>
);
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);



