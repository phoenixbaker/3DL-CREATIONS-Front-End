import AddressInput from "./AddressInput";
import EmailInput from "./EmailInput";
import Form from "./Form";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

export default function RegisterForm() {
  return (
    <Form>
      <NameInput />
      <EmailInput />
      <AddressInput />
      <PasswordInput />
      <SubmitButton />
    </Form>
  );
}
