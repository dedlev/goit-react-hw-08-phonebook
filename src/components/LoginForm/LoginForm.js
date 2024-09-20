import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { Form, Input, Button } from '../../styles/sharedStyles';

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
    <Form onSubmit={handleSubmit} autocomplete="of">
      <label>
        Email
        <Input type="email" name="email" />
      </label>
      <label>
        Password
        <Input type="password" name="password" />
      </label>
      <Button type="submit">LogIn</Button>
    </Form>
  );
};
