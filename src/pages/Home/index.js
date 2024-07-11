import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, Main } from '../../styles/GlobalStyles';
import { SectionWelcome, SearchBox } from './styled';

export default function Home() {
    return (
        <Container>
            <Main>
                <SectionWelcome>
                    <h1>Search for course</h1>
                    <SearchBox>
                        <input type="text" placeholder="Type the course name" />
                        <button>🔍</button>
                    </SearchBox>
                </SectionWelcome>
            </Main>
        </Container>
    );
}