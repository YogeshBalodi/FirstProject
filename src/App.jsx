import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="auth" element={<Auth/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
