import styled from "styled-components";

interface LabelProps {
  isEmpty: boolean;
  color?: string;
}

interface InputProps {
  color?: string;
}

export const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabel = styled.label<LabelProps>`
  position: absolute;
  top: ${({ isEmpty }) => (isEmpty ? "0px" : "-12px")};
  left: 0px;
  font-size: ${({ isEmpty }) => (isEmpty ? "1rem" : "0.75rem")};
  color: ${({ color }) => color || (({ theme }) => theme.colors.text.primary)};
  pointer-events: none;
  transition: all 0.5s ease-in-out;
`;

export const InputStyled = styled.input<InputProps>`
  border: none;
  border-bottom: 1px solid
    ${({ color }) => color || (({ theme }) => theme.colors.text.primary)};
  background: transparent;
  width: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    input:-webkit-autofill {
      box-shadow: 0 0 0 30px white inset;
    }
    input:-webkit-autofill {
      -webkit-text-fill-color:  ${({ theme }) => theme.colors.primary};
    }
  }

  min-width: 18rem;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: ${({ color }) => color || "#FFF"};
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};
    ~ ${InputLabel} {
      top: -12px;
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 0.75rem;
    }
  }
`;
