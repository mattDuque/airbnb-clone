import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import MenuIcon from '@material-ui/icons/Menu'
import {Avatar} from '@material-ui/core'

import './Styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img 
                    className="header__icon" 
                    src="https://miro.medium.com/max/2678/0*NChTo-XqLOxLabIW" 
                    alt=""/>
            </Link>    
            <div className="header__center">
                <input type="text" placeholder="Start your search"/>
                <SearchIcon className="search-icon"/>
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <span>
                    <MenuIcon className="menu"/>
                    <Avatar/>
                </span>

            </div>
        </div>
    )
}

export default Header