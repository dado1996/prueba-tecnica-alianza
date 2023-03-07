import { Flex, Text } from "@chakra-ui/react";
import LoginForm from "./components/Auth/LoginForm";
import GifsContainer from "./components/Gifs/GifsContainer";
import useAuth from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();
  return (
    <Flex justifyContent="center" direction="column" alignItems="center">
      <Text fontSize="24pt">Gif Displayer</Text>
      {auth ? <GifsContainer /> : <LoginForm />}
    </Flex>
  );
}

export default App;
