import styled from 'styled-components';

import { gold, strongBlue } from '../../config/colors';

export const SectionWelcome = styled.section`
    h1 {
        font-size: 3rem;
        color: ${gold};
        text-align: center;
        text-shadow: 0.1rem 0.1rem 0.1rem ${strongBlue};
    }
`;

export const SearchBox = styled.div`
    margin: 2rem auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 60%;
        height: 2.3rem;
        border: 0.1rem solid ${gold};
        border-radius: 0.5rem 0 0 0.5rem;
        font-size: 1.1rem;
        padding-left: 0.5rem;
    }

    button {
        height: 2.3rem;
        border: 0.1rem solid ${gold};
        border-radius: 0 0.5rem 0.5rem 0;
        font-size: 1.3rem;
        background-color: #ffffff;
        cursor: pointer;
        margin: 0;
        padding: 0 0.5rem;
    }

    @media (max-width: 410px) {
        input {
            width: 80%;
        }
    }
`;