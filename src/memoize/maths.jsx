import React from 'react'
import { selector } from 'recoil';
import { CellValueState } from './cellValueState';
import { memoize } from './memoize';
import { evaluate } from 'mathjs';
import { equationCalc } from '../calcs/equationCalc';

const maths = (cellId) => {
  return (
    memoize(`evaluatedCell_${cellId}`, () =>
        selector({
            key: `evaluatedCell_${cellId}`,
            get: ({get}) => {
                const value = get(CellValueState(cellId)).toString();
            

                if(value.startsWith('=')){
                    
                    
                    try{
                        
                        const evaluatedExpression = equationCalc(get, value.slice(1));

                        return evaluate(evaluatedExpression);

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