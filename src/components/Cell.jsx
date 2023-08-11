import React, { useEffect, useState } from 'react'
import './style.scss'
import { atom, useRecoilState } from 'recoil';
import { CellValueState } from '../memoize/cellValueState';



const Cell = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [cellValue, setCellValue] = useRecoilState(CellValueState(props.cellId))

    const updateCellValue = (e) => {
        setCellValue(e.target.value)
    }

    const LabelToInput = (e) => {
        console.log(e.target.dataset.cellId)
        setEditMode(true);
    }
    const InputToLabel = () => setEditMode(false);

    const outSideClick = (e) => {
        if((e.target)?.dataset?.cellId !== props.cellId){
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
            <input className={`Cell ${props.cellId}`} onKeyDown={EnterInput} data-cell-id={props.cellId} value={cellValue} onChange={updateCellValue} />
        ) : (
            <div className={`Cell ${props.cellId}`} onClick={LabelToInput} data-cell-id={props.cellId} >
                {cellValue}
            </div>
        );
}

export default Cell