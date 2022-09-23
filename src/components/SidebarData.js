import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IOIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '#home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'The story',
        path: '#aboutMe',
        icon: <FaIcons.FaBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Portafolio',
        path: '#portfolio',
        icon: <FaIcons.FaBlackTie/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '#contactMe',
        icon: <IOIcons.IoIosContact/>,
        cName: 'nav-text'
    }
]