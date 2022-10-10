import { useState } from "react";
import Action from "../components/action";
import Card from "../components/card";
import Input from "../components/input";
import { Title } from "../components/typography";

function App() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();


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
            setValue={setPass}
          />
          <Action pass={pass!!} />
        </>
      </Card>
    </div>
  );
}

export default App;
