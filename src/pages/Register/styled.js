import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SectionRegist = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
