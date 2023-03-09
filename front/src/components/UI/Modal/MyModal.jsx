import React from "react";
import classes from './MyModal.module.css';
import "./MYModal.css"

const MyModal = ({active, setActive, text}) => {
    return(
        <div className={active ? "modal active" : "modal" } onClick={()=>setActive(false)}>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export {MyModal}