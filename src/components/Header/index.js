import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';

export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <header>
            <Container>
                <div>
                    <Link to="/">
                        <p>Logo</p>
                    </Link>

                    {isLoggedIn ? (
                        <Link to="/user">
                            <p>Usuario</p>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <p>Logar</p>
                        </Link>
                    )}
                </div>
            </Container>
        </header>
    );
}