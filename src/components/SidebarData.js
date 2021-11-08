import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IOIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/PersonalWebPage',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Portafolio',
        path: '/PersonalWebPage/portafolio',
        icon: <FaIcons.FaBlackTie/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/PersonalWebPage/contacto',
        icon: <IOIcons.IoIosContact/>,
        cName: 'nav-text'
    }
]