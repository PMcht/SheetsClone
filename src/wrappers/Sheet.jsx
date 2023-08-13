import React, { useEffect, useState } from 'react'
import Row from '../components/Row';
import Column from '../components/Column';
import Cell from '../components/Cell';
import './style.scss'
import { numberToChar } from '../calcs/numberToChar';
import Headers from '../components/Headers';

const Sheet = (props) => {

  const [rows, setRows] = useState(12)
  const [columns, setColumns] = useState(6)

    const addRows = () => {
        setRows(rows+1)
    }
    const addColumns = () => {
        setColumns(columns+1)
    }

  return (
    <div className='sheetWrap'>

        <table>
            <tbody>

                <Row>
                    {[...Array(columns + 1)].map((column, columnIndex) => 
                        columnIndex !== 0 ?<Headers key={columnIndex}>{numberToChar(columnIndex - 1)}</Headers> : <Headers key={columnIndex} />
                    )}
                </Row>
              
                {[...Array(rows)].map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        <Headers className="vertical">{rowIndex +1}</Headers>
                        {[...Array(columns)].map((column, columnIndex) => (
                            <Column key={columnIndex}>
                                <Cell cellId={`${numberToChar(columnIndex)}${rowIndex+1}`} />
                            </Column>
                        ))}
                    </Row>
                ))}

            </tbody>
        </table>

        <button onClick={addRows}>Add Row</button>
        <button onClick={addColumns}>Add Column</button>

    </div>
  )
}

export default Sheet