import React from 'react'
import { Link } from 'react-router-dom'

export interface MenuProps {
  items: Array<{
    name: string
    route: string
  }>

}

const Menu: React.FC<MenuProps> = ({ items }: MenuProps) => {
  return (
        <ul className="hidden md:flex justify-between">
        {items.map(({ name, route }: { name: any, route: any }, index) => (
            <li key={name} className="float-left">
              <Link key={index} to={route} >
                <a
                  className="flex cursor-pointer items-center  rounded-sm px-1 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out"
                >
                  <span className="text-black">{name}</span>
                </a>
              </Link>
            </li>
        ))}
    </ul>
  )
}
export default Menu
