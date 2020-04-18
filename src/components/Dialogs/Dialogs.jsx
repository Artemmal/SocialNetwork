import React from 'react'
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    props.dialogsState.dialogsData.map( (element) =>
                        <DialogItem id={element.id} name={element.name} avatar={element.avatar}/> )
                }

            </div>

            <div className={s.messages}>

                <div>
                {
                    props.dialogsState.messagesData.map( (element) =>
                        <Message message={element.message} /> )
                }
                </div>

                <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add message</button>
                </div>
                </div>
            </div>


        </div>

    )
};


export default Dialogs;
