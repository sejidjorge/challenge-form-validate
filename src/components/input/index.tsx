import { SetStateAction } from "react";
import { Container, InputContainer, InputLabel, InputStyled } from "./styles";

export interface InputProps {
  label: string;
  type: string;
  value?: string;
  color?: string;
  error?: boolean;
  setValue: (
    value: string
  ) => void | React.Dispatch<SetStateAction<string | undefined>>;
}

const Input = ({ label, type, value, setValue, color, error }: InputProps) => {
  return (
    <>
      <Container>
        <InputContainer>
          <InputStyled
            color={color}
            id={label}
            name={label}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type={type}
            error={error}
          />
          <InputLabel color={color} isEmpty={!value} htmlFor={label}>
            {label}
          </InputLabel>
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
