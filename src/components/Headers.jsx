import React from 'react'
import './style.scss'

const Headers = (props) => {
  return (
    <th className='cellHeaders'>{props.children}</th>
  )
}

export default Headers