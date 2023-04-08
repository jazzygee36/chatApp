import Navigation from "./components/navigate/routes";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    </>
  );
}

export default App;
