import React,{useState} from "react";
import Button from "../Button/Button";
import "./modal.css"

const Modal = (props) =>{
    let errorMessage ="";
    switch(props.errorCode){
        case "1":
                errorMessage ="Please enter a valid name and age(non-empty values).";
            break;
        case "2":
            errorMessage= "Please enter a valid age (>0)";
            break;
        default:            
            break;
    };
    const closeModal=()=>{
        props.errorCodeHandler("0");
    }
    return(
        <div className={`modal-container ${Number(props.errorCode)?"show":""}`} data-error-code={props.errorCode}>
            <div className="modal-content">
                <div className="modal-header"><span>Invalid Input</span></div>
                <div className="modal-body">
                    {errorMessage}
                </div>
                <div className="modal-footer">
                    <Button onClick={closeModal} >Okay</Button>
                </div>
            </div>
            
        </div>
    )

};

export default Modal;