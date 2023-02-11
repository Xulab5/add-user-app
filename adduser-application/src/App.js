import React, {useState} from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import ModalError from "./Components/UI/Modal/Modal";

import './App.css';

function App() {
  const [errorCode, setErrorCode] = useState("0");
  const [user, setUser] = useState([
    { id: '1', username: "John", age: "23"},
    {id: "2", username: "Jane", age: "34"}
  ]);

  const errorCodeHandler = (code)=>{
    setErrorCode(code);
  }
  const saveUserHandler = (userInfo) =>{
      setUser(prevUserslist =>{
          return [...prevUserslist, userInfo];//get the prevous userlist and add the news user info 
      })
  }

  return (
    <div className="User-App">
      <ModalError errorCode={errorCode} errorCodeHandler={errorCodeHandler}/>
      <AddUser addUserHandler = {saveUserHandler} errorCodeHandler ={errorCodeHandler}/>
      <UserList list={user} ></UserList>
    </div>
  );
}

export default App;
