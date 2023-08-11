import React from 'react'
import Row from '../components/Row';
import Column from '../components/Column';
import Cell from '../components/Cell';
import './style.scss'

const Sheet = () => {

  return (
    <div className='sheetWrap'>

        <table>
            <tbody>

              <Row>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
              </Row>
              <Row>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
              </Row>
              <Row>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
                <Column>
                  <Cell />
                </Column>
              </Row>



                
            </tbody>
        </table>

    </div>
  )
}

export default Sheet