import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from '../common/menu/menuItem'

const SideDraw: React.FC = () => {
  return (
    <Fragment>
     <ul className="flex flex-col justify-around w-[60%] items-center text-lg mt-0 h-[60%]">
        {menuItems.map(({ name, route }: { name: any, route: any }, index) => (
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

    </Fragment>
  )
}

export default SideDraw
