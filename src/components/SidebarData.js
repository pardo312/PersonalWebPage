import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IOIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Portafolio',
        path: '/portafolio',
        icon: <FaIcons.FaBlackTie/>,
        cName: 'nav-text'
    },
    {
        title: 'Acerca de mi',
        path: '/aboutMe',
        icon: <IOIcons.IoIosContact/>,
        cName: 'nav-text'
    }
]