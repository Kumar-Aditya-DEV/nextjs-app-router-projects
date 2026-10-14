import React from 'react'

type BadgeProps = {
    children: React.ReactNode
}

const Badge = ({children}: BadgeProps) => {
  return (
    <span>{children}</span>
  )
}

export default Badge;