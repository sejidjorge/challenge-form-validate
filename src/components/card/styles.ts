import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyCard = styled.div`
  width: 30rem;
  height: 40rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
