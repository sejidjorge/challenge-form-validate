import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Error = styled.p`
  font-size: 0.8rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.error};
`;
