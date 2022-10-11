import { useEffect, useState } from "react";
import Action from "../components/action";
import Card from "../components/card";
import Input from "../components/input";
import { Title, Error } from "../components/typography";

function App() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        pass!!
      ) === false
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [pass, error]);

  return (
    <div className="App">
      <Card>
        <>
          <Title>Register</Title>
          <Input label="Name" type="text" value={name} setValue={setName} />
          <Input label="Email" type="email" value={email} setValue={setEmail} />
          <Input
            label="Password"
            type="password"
            value={pass}
            error={error}
            setValue={setPass}
          />
          {/([A-Z])/.test(pass!!) === false && (
            <Error>A senha precisa ter pelo menos uma maiuscula.</Error>
          )}
          {/([a-z])/.test(pass!!) === false && (
            <Error>A senha precisa ter pelo menos uma minuscula.</Error>
          )}
          {/([0-9])/.test(pass!!) === false && (
            <Error>A senha precisa ter pelo menos um numero.</Error>
          )}
          {/([#?!@$%^&*-])/.test(pass!!) && (
            <Error>
              A senha precisa ter pelo menos um destes caracteres especias
              (#?!@$%^&*-).
            </Error>
          )}
          {pass && pass.length < 8 && (
            <Error>A senha precisa ter pelo menos oito digitos.</Error>
          )}
          <Action error={error} />
        </>
      </Card>
    </div>
  );
}

export default App;
