import React, { useEffect, useState } from 'react'
import './style.scss'

const Cell = () => {

    const [editMode, setEditMode] = useState(false);

    const LabelToInput = () => setEditMode(true);
    const InputToLabel = () => setEditMode(false);

    const outSideClick = (e) => {
        InputToLabel()
    }

    const EnterInput = (e) => {
        if (e.key === "Enter"){
            setEditMode(false)
        }
    }


    // useEffect(() => {
    //     document.addEventListener('click', outSideClick);
    // })


  return editMode ? (
            <input className='Cell' onKeyDown={EnterInput} />
        ) : (
            <div className='Cell' onClick={LabelToInput}></div>
        );
}

export default Cell