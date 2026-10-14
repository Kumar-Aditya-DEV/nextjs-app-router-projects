import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button;
