import React from 'react'
import { Link } from '@components/atoms/Link'

interface Link {
  name: string
  href: string
  icon: JSX.Element
  auth?: boolean
}

type props = {
  links: Link[]
}

export function SidebarLinks({ links }: props) {
  return (
    <>
      {links.map((item, index) => (
        <Link
          name={item.name}
          href={item.href}
          icon={item.icon}
          activeClassName="active"
          key={index}
        />
      ))}
    </>
  )
}
