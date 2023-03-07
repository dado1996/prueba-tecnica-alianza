import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    login({ name: email.split('@')[0], email, })
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        margin="1.5rem"
        maxWidth="50%"
        gap="1rem"
        alignItems="center"
        minWidth="300px"
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <Input {...field} type="email" placeholder="Email" borderColor="#222" />
          )}
        />
        {errors.email && <Text color="red">{errors.email.message}</Text>}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
          }}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="Password" borderColor="#222" />
          )}
        />
        {errors.password && <Text color="red">{errors.password.message}</Text>}
        <Button type="submit">Login</Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
