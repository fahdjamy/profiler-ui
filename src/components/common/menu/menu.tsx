import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SideDrawer from '../../sideDraw/SideDrawer'

export interface MenuProps {
  items: Array<{
    name: string
    route: string
  }>

}

const Menu: React.FC<MenuProps> = ({ items }: MenuProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Fragment>
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
   <button
  className="border ml-[3rem]  border-green text-white p-3 md:hidden md:ml-[5rem]"
     onClick={() => setOpen(!open)}
    >
      &#9776;
    </button>
    {/* {open && (
  <div
    className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50"
    onClick={() => setOpen(false)}
  ></div>
    )} */}
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
