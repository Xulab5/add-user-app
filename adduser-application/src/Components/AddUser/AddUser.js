import React,{useState} from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import "./AddUser.css";

const AddUser = (props)=>{
    const [username,setUsername] = useState("");
    const [age, setAge] = useState("");

    const usernameInputHandler = (e) =>{
        setUsername(e.target.value);
    };

    const ageInputHandler = (e)=>{
        setAge(e.target.value);        
    };
    
    const validationHandler =(e)=>{
        e.preventDefault();
       if(username.trim().length == 0 && age.trim().length == 0){
            props.errorCodeHandler("1");
            return;
       }else if( Number(age) <= 0){
            props.errorCodeHandler("2");
       }else{
            props.addUserHandler({id: Math.random(),username:username,age:age});//triggers function to add the user to the variable;
            props.errorCodeHandler("0");
            setAge("");
            setUsername("");
       }
    };
    return(
        <Card>
        <section className="Add-user">
            <form className="Add-user__form" onSubmit={validationHandler}>
                <div className="form-field">
                    <div className="form-field__label">Username</div>
                    <input type="text" value={username} onChange={usernameInputHandler} />                    
                </div>
                <div className="form-field">
                    <div className="form-field__label">Age</div>
                    <input type="number" value={age} onChange={ageInputHandler} />                    
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </section>
        </Card>
    )

};
export default AddUser;