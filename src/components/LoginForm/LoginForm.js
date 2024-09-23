import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { Form, Input, Button, Label } from '../../styles/sharedStyles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Form onSubmit={handleSubmit} autocomplete="of"> */}
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">
        {/* <Button type="submit" disabled={!(email && password)}> */}
        LogIn
      </Button>
    </Form>
  );
};
