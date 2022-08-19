import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <h1 className="text-success text-center mb-5">{title}</h1>
    </div>
  )
}

export default Header