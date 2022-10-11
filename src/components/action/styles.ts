import styled from "styled-components";

export const ContainerAction = styled.div`
  width: 28rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const LocationCell = styled.div`
  width: calc(28rem / 8);
  height: 7rem;
`;

interface TypeButton {
  position: string;
}

export const ButtonAction = styled.button<TypeButton>`
  width: 6rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  border: none;
  outline: none;
  left: ${({ position }) => (position ? position : "auto")};
  transition: all 0.2s linear;
`;
