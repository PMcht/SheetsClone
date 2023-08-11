import React, { useEffect } from 'react'
import Row from '../components/Row';
import Column from '../components/Column';
import Cell from '../components/Cell';
import './style.scss'

const Sheet = (props) => {

  const numberofRows = 12;
  const numberofColumns = 6;


  return (
    <div className='sheetWrap'>

        <table>
            <tbody>
              
                {[...Array(numberofRows)].map((row, rowIndex) => (
                    <Row key={rowIndex} data-row-id={rowIndex}>
                        {[...Array(numberofColumns)].map((column, columnIndex) => (
                            <Column key={columnIndex}>
                                <Cell cellId={`${rowIndex},${columnIndex}`} />
                            </Column>
                        ))}
                    </Row>
            ))}



                
            </tbody>
        </table>

    </div>
  )
}

export default Sheet