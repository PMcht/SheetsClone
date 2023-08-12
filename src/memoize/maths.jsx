import React from 'react'
import { selector } from 'recoil';
import { CellValueState } from './cellValueState';
import { memoize } from './memoize';
import { evaluate } from 'mathjs';

const maths = (cellId) => {
  return (
    memoize(`evaluatedCell_${cellId}`, () =>
        selector({
            key: `evaluatedCell_${cellId}`,
            get: ({get}) => {
                const value = get(CellValueState(cellId));

                if(value.startsWith('=')){
                    try{
                        return evaluate(value.slice(1));
                    }

                    catch{
                        return value;
                    }
                }

                return value
            }
    })
  ))
}

export default maths