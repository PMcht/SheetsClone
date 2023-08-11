import React, { useEffect, useState } from 'react'
import './style.scss'
import { atom, useRecoilState } from 'recoil';
import { CellValueState } from '../memoize/cellValueState';

const Cell = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [cellValue, setCellValue] = useRecoilState(CellValueState)

    const updateCellValue = (e) => {
        setCellValue(e.target.value)
    }

    const LabelToInput = () => setEditMode(true);
    const InputToLabel = () => setEditMode(false);

    const outSideClick = (e) => {
        if((e.target)?.dataset?.cellID !== props.cellID){
            InputToLabel()
        }
    }

    const EnterInput = (e) => {
        if (e.key === "Enter"){
            setEditMode(false)
        }
    }




    useEffect(() => {
        document.addEventListener('click', outSideClick);
    })


  return editMode ? (
            <input className='Cell' onKeyDown={EnterInput} data-cell-id={props.cellID} value={cellValue} onChange={updateCellValue} />
        ) : (
            <div className='Cell' onClick={LabelToInput} data-cell-id={props.cellID} >
                {cellValue}
            </div>
        );
}

export default Cell