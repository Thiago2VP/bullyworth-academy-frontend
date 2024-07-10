import styled from 'styled-components';
import { strongBlue, gold } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  align-itens: center;
  justify-content: space-between;

  a {
    color: ${gold};
    margin: 1rem 2rem;
  }

  img {
    width: 6rem;
  }

  @media (max-width: 420px) {
    img {
      width: 4rem;
    }
  }

  @media (max-width: 300px) {
    img {
      width: 3rem;
    }
  }
`;

export const Banner = styled.div`
  background: ${strongBlue};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  h1 {
    font-size: 1.5rem;
    margin-left: 1rem;
    text-align: center;
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 0;
    }
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 0;
    }
  }
`;

export const UserOpt = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.3rem;

    p:hover {
      text-decoration: underline;
    }

    @media (max-width: 420px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 300px) {
    p {
      font-size: 0.8rem;
    }
  }
`;