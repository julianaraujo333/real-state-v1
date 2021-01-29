import React from 'react'
import {menuData} from './../../data/MenuData'
import {Button} from './../Button/index.js';

import {Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn} from './style'

const Navbar = () =>{
    return(
        <>
        <Nav>
            <Logo>Alma</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) =>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">
                    Contact us
                </Button>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;