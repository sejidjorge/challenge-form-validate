import { BodyCard, GlobalContainer } from "./styles";

export interface CardType {
  children: JSX.Element;
}

const Card = ({ children }: CardType) => {
  return (
    <GlobalContainer>
      <BodyCard>
        <>{children}</>
      </BodyCard>
    </GlobalContainer>
  );
};

export default Card;
