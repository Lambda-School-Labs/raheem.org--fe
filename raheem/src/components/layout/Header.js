import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../../assets/Logo.svg';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

/* styles */
import { TopBar } from '../../styles/global';

function Header() {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <HeaderContainer>
            <TopBar />
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Raheem Logo" /></Link>
                </div>

                <nav>
                    <MenuOutlinedIcon onMouseEnter={() => toggleMenu()} style={{ fontSize: '24px' }} />
                    {toggle === true && <div onMouseLeave={() => toggleMenu()} onClick={() => toggleMenu()} className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/QR">QR</Link>
                        <Link to="/landing">Landing</Link>
                        <Link to="/about">About</Link>
                        <Link to="/report">Report</Link>
                        <Link to="/story">Story</Link>
                        {/* <Link to="/subscribe">Subscribe</Link> */}
                        <Link to="/thank-you">Thank You</Link>
                    </div>}
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;

    .header {
        width: 100%;
        height: 5rem;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #111111;
        margin-bottom: 2rem;
    
        .logo {
            width: 15%;
            padding-left: 5%;
        }
    
        nav {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-right: 5%;
    
            div.navigation {
                position: absolute;
                right: 0;
                margin-top: 4rem;
                display: flex;
                flex-direction: column;
    
                a {
                    background: #ffffff;
                    height: 4rem;
                    width: 15rem;
                    text-decoration: none;
                    color: #111111;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.4rem;
                    padding-left: 2rem;
                    line-height: 4rem;
                    transition: all 300ms;
    
                    &:hover {
                        transition: background 300ms;
                        background: #F2F2F2;
                    }
                }
            }
        }
    }
`;