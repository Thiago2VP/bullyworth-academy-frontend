import styled from 'styled-components';
import { gold, strongBlue } from '../../config/colors';

export const MF = styled.footer`
  background: ${strongBlue};
  min-height: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${gold};

  p {
    font-size: 1.1rem;
    text-align: center;
  }
`;
