import React, { ReactElement } from 'react'
import Navbar from './layout/navbar/navbar'
import Logo from './common/logo/logo'
import Menu from './common/menu/menu'
import { menuItems } from './common/menu/menuItem'
import Footer from './layout/footer/footer'
import LogoBlack from '../assets/vrarts-logo.png'

export interface LayoutProps {
  children?: undefined | ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): ReactElement => {
  return (
    <React.Fragment>
        <Navbar rightComponents={<Logo logo={LogoBlack} />} leftComponents={<Menu items={menuItems} />} />
        <div className='min-h-[90vh] flex- flex-col body-font p-[2px] font-Roboto text-[#303030]'>
            {children}
        </div>
        <Footer title='Footer' />
    </React.Fragment>
  )
}
export default Layout
