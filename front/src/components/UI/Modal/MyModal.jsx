import React from "react";
import classes from './MyModal.module.css';
import "./MYModal.css"

const MyModal = ({active, setActive}) => {
    return(
        <div className={active ? "modal active" : "modal" } onClick={()=>setActive(false)}>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                <h1>
                    Тут будет инфа о столике 
                </h1>
            </div>
        </div>
    )
}

export {MyModal}