import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { Button, Form, Input } from '../../styles/sharedStyles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autocomplette="off">
      <label>
        Username
        <Input type="text" name="name" />
      </label>
      <label>
        Email
        <Input type="email" name="email" />
      </label>
      <label>
        password
        <Input type="password" name="password" />
      </label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
