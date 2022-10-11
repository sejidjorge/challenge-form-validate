import { useState } from "react";
import { ButtonAction, ContainerAction, LocationCell } from "./styles";

interface ActionType {
  error: boolean;
}
const Action = ({ error }: ActionType) => {
  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [position, setPosition] = useState<string>("1rem");
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const toLocatePointer = (value: number) => {
    if (error === true) {
      if (isEnd === false) {
        if (value === 1 || value === 2) {
          setIsEnd(false);
          setPosition("7rem");
        } else if (value === 3) {
          setPosition("10.5rem");
        } else if (value === 4) {
          setPosition("14rem");
        } else if (value === 5) {
          setPosition("17.5rem");
        } else if (value === 6) {
          setPosition("21rem");
        } else if (value === 7 || value === 8) {
          setPosition("17.5rem");
          setIsEnd(true);
        }
      } else {
        if (value === 1 || value === 2) {
          setIsEnd(false);
        } else if (value === 3) {
          setPosition("1rem");
        } else if (value === 4) {
          setPosition("3rem");
        } else if (value === 5) {
          setPosition("7rem");
        } else if (value === 6) {
          setPosition("10.5rem");
        } else if (value === 7 || value === 8) {
          setPosition("14rem");
          setIsEnd(true);
        }
      }
    }
  };

  return (
    <ContainerAction>
      <>
        {values.map((item) => {
          return (
            <LocationCell
              key={item}
              onMouseEnter={() => toLocatePointer(item)}
            />
          );
        })}
      </>
      <ButtonAction
        onClick={() => window.alert("User Registrado")}
        position={position}
      >
        Register
      </ButtonAction>
    </ContainerAction>
  );
};

export default Action;
