import React, { useEffect, useState } from 'react'
import './style.scss'
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { CellValueState } from '../memoize/cellValueState';
import maths from '../memoize/maths';



const Cell = (props) => {

    const [editMode, setEditMode] = useState(false);
    const mathResult= useRecoilValue(maths(props.cellId));
    const [cellValue, setCellValue] = useRecoilState(CellValueState(props.cellId))

    const updateCellValue = (e) => {
        setCellValue(e.target.value)
    }

    const LabelToInput = (e) => {
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
            <input className={`Cell Input ${props.cellId}`} onKeyDown={EnterInput} data-cell-id={props.cellId} value={cellValue} onChange={updateCellValue} />
        ) : (
            <div className={`Cell Label ${props.cellId}`} onClick={LabelToInput} data-cell-id={props.cellId} >
                {mathResult}
            </div>
        );
}

export default Cell