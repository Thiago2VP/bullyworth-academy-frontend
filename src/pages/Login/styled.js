import styled from 'styled-components';
import { strongBlue } from '../../config/colors';

export const SectionLogin = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
`;

export const QuestionRegist = styled.div`
  margin-top: 8rem;
  display: flex;
  align-itens: center;
  justify-content: center;
  color: ${strongBlue};
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
`;