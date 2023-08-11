import React from 'react'
import './style.scss'

const Column = (props) => {
  return (
    <td className='Column'>{props.children}</td>
  )
}

export default Column