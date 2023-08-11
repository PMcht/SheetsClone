import React from 'react'
import './style.scss'

const Row = (props) => {
  return (
    <tr className='Row'>{props.children}</tr>
  )
}

export default Row