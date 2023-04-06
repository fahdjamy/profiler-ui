import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SideDrawer from '../../sideDraw/SideDrawer'

export interface MenuProps {
  items: Array<{
    name: string
    route: string
  }>

}

const Menu: React.FC<MenuProps> = ({ items }: MenuProps) => {
  const location = useLocation()
  const [open, setOpen] = React.useState(false)
  return (
    <Fragment>
        <ul className="hidden md:flex justify-between">
        {items.map(({ name, route }: { name: any, route: any }, index) => (
            <li key={name} className="float-left">
              <Link key={index} to={route} >
                <a className={`flex cursor-pointer items-center  rounded-sm px-1 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out ${
                location.pathname === route ? 'text-gray-900 font-bold' : ''
              }`} >
                  <span className="text-black">{name}</span>
                </a>
              </Link>
            </li>
        ))}
    </ul>
    <div className='flex flex-col md:hidden justify-end'>
   <button
  className="border float-left w-[4rem] float-right border-green text-white p-3 md:hidden rounded-[15px] ml-[10rem]"
     onClick={() => setOpen(!open)}
    >
      &#9776;
    </button>
    </div>
    {open && (
  <div
    className={`${open ? 'fixed top-[4.5rem] left-0 bottom-0 w-full' : ''} w- h-screen bg-white text-black flex flex-col items-center justify-start md:hidden`}
    style={{
      transform: open ? 'translateX(0)' : 'translateX(-100%)'
    }}
  >
    <SideDrawer />
  </div>
    )}
    </Fragment>
  )
}
export default Menu
