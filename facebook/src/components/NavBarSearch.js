import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navCss.css'

const NavBarSearch = () => {
    return (
        <nav>
            <div className="mainNav">
  
                <div className="leftBlock">
                    <div className="leftBlockList"><i className="fab fa-facebook fa-3x iconFacebook"/></div>
                    <div className="leftBlockList">
                        <div className="searchBox">
                            <i className="fas fa-search fa-2x searchIcon"/>
                            <input  type="text"placeholder="Search Facebook"></input>
                        </div>
                    </div>
                </div>

                <div className="centerBlock">
                    <i className="fas fa-home fa-3x centerIcons"/>
                    <i className="fas fa-flag fa-3x centerIcons"/>
                    <i className="fas fa-play-circle fa-3x centerIcons"/>
                    <i className="fas fa-store fa-3x centerIcons"/>
                    <i className="fas fa-bars fa-3x centerIcons"/>
                </div>
                <div className= "rightBlock">
                    <div className= "rightBlockCircle">
                        <i className="fas fa-caret-down fa-2x rightIcons"/>  
                    </div>
                    <div className= "rightBlockCircle">
                        <i className="fas fa-bell fa-2x rightIcons"/>  
                    </div>
                    <div className= "rightBlockCircle">
                        <i className="fab fa-facebook-messenger fa-2x rightIcons"/>  
                    </div>
                    <div className= "rightBlockCircle">
                        <i className="fas fa-plus fa-2x rightIcons"/>  
                    </div>
                    <div className="AccountCircle">
                        <div className= "imageCircle"></div>
                        <h1 className= "txt">Nisarg Dongare</h1>
                    </div>
                </div>
            </div>
        </nav>
                                      
    );
}

export default NavBarSearch;