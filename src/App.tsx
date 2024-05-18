import { useState } from "react";
import SignupForm from "./Components/SignupFrom";
import ThankYou from "./Components/ThankYou";

type formState = "initial" | "success" | "error";

function App() {
  const [formState, setFormState] = useState<formState>("initial");
  const [email, setEmail] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email: string = e.target.value;
    setEmail(email);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    const emailInput = form.email;
    emailInput.blur();
    if (emailInput.checkValidity()) {
      setFormState("success");
    } else {
      setFormState("error");
    }
  }

  let content;

  switch (formState) {
    case "initial":
      content = (
        <SignupForm
          email={email}
          handleChange={handleInputChange}
          isValid={true}
          handleSubmit={handleSubmit}
        />
      );
      break;
    case "success":
      content = (
        <ThankYou email={email} handleDismiss={() => setFormState("initial")} />
      );
      break;
    case "error":
      content = (
        <SignupForm
          email={email}
          handleChange={handleInputChange}
          isValid={false}
          handleSubmit={handleSubmit}
        />
      );
      break;
  }

  return content;
}

export default App;
