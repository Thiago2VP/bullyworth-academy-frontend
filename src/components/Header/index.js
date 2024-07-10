import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav, Banner, Logo, UserOpt } from './styled';
import { Container } from '../../styles/GlobalStyles';

import imgLogo from '../../assets/images/Img_Logo.png';

export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <header>
            <Banner>
                <Container>
                    <Nav>
                        <Link to="/">
                            <Logo>
                                <img src={imgLogo} alt="BullyWorth Academy Logo" />
                                <div>
                                    <h1>BULLYWORTH</h1>
                                    <h1>ACADEMY</h1>
                                </div>
                            </Logo>
                        </Link>

                        {isLoggedIn ? (
                            <Link to="/user">
                                <UserOpt>
                                    <p>User Page</p>
                                </UserOpt>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <UserOpt>
                                    <p>Sign In</p>
                                </UserOpt>
                            </Link>
                        )}
                    </Nav>
                </Container>
            </Banner>
        </header>
    );
}