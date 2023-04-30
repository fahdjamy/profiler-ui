import React, { ReactElement } from 'react'
import Navbar from './layout/navbar/navbar'
import Logo from './common/logo/logo'
import Menu from './common/menu/menu'
import { menuItems } from './common/menu/menuItem'
import Footer from './layout/footer/footer'
import LogoBlack from '../assets/vrarts-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faPinterest, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export interface LayoutProps {
  children?: undefined | ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): ReactElement => {
  const socialMedia = [
    {
      name: 'github',
      icon: faGithub
    },
    {
      name: 'twitter',
      icon: faTwitter
    },
    {
      name: 'pintrest',
      icon: faPinterest
    },
    {
      name: 'instagram',
      icon: faInstagram
    }
  ]
  return (
    <React.Fragment>
          <div className='flex flex-col items-center w-[2rem] h-[35vh] text-xl space-y-8 z-30 fixed bottom-0 left-[1rem] '>
            {
            socialMedia.map((elm, index) => (
              <Link key={index} to='' >
                <FontAwesomeIcon icon={elm
                  .icon} />
              </Link>
            ))
            }
            <div className="border-l h-full border-gray-500"></div>
          </div>
        <Navbar rightComponents={<Logo logo={LogoBlack} />} leftComponents={<Menu items={menuItems} />} />
        <div className='min-h-[90vh] mt-[6rem] flex- flex-col body-font p-[2px] font-Roboto text-[#303030]'>
            {children}
        </div>
        <Footer title='Footer' />
    </React.Fragment>
  )
}
export default Layout
