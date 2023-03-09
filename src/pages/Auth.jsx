import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, facebookProvider, googleProvider } from "../firebase";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { useEffect, useState } from "react";
function Auth() {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const clearFormData = () => {
    setEmail("");
    setPassword("");
    setCPassword("");
  };

  const signInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      toast({
        description: `${errorCode}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  };
  const signInWithEmail = async () => {
    try {
      if (!email || !password) {
        toast({
          description: "Please fill in all feilds",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      toast({
        description: `${errorCode}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  };
  const signUpWithEmail = async () => {
    try {
      if (!email || !password || !cPassword) {
        toast({
          description: "Please fill in all feilds",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      if (password !== cPassword) {
        // show toast and return
        toast({
          description: "Password doesn't matched",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast({
        description: "Sign Up success",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      toast({
        description: `${errorCode}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  };

  const signUpWithFacebook = () => {
    try {
      const userCredentials = signInWithPopup(auth,facebookProvider)
    } catch (error) {
      const errorCode = error.code;
      toast({
        description: `${errorCode}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <div className="w-[50%] h-[50%] bg-gray-400 flex justify-center">home</div> */}
      <Tabs
        isFitted
        variant="enclosed"
        background={"gray.100"}
        size="md"
        w={"50%"}
        h={"auto"}
        className="p-3"
        colorScheme="green"
      >
        <TabList d={"flex"} justifyContent={"space-around"}>
          <Tab onClick={clearFormData}>Sign Up</Tab>
          <Tab onClick={clearFormData}>Sign In</Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            display={"flex"}
            justifyContent={"center"}
            flexDir="column"
            className="space-y-2"
          >
            <div className="flex flex-col">
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  border={"1px"}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  border={"1px"}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="text"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  border={"1px"}
                />
              </FormControl>
              <Button
                onClick={signUpWithEmail}
                colorScheme="blue"
                variant="solid"
                marginTop={2}
              >
                Sign Up
              </Button>
            </div>
            <div className="flex justify-center">or</div>
            <Button leftIcon={<FcGoogle />} onClick={signInWithGoogle} colorScheme="blue" variant="solid">
              Sign Up with Google
            </Button>
            <Divider />
            <Button
              leftIcon={<MdOutlineFacebook />}
              colorScheme="facebook"
              variant="solid"
              onClick={signUpWithFacebook}
            >
              Sign Up with FaceBook
            </Button>
          </TabPanel>
          <TabPanel
            display={"flex"}
            justifyContent={"center"}
            flexDir="column"
            className="space-y-2"
          >
            <div className="flex flex-col">
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  border={"1px"}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  border={"1px"}
                />
              </FormControl>
              <Button
                onClick={signInWithEmail}
                marginTop={2}
                colorScheme="blue"
                variant="solid"
              >
                Sign In
              </Button>
            </div>
            <div className="flex justify-center">or</div>
            <Button
              leftIcon={<FcGoogle />}
              colorScheme="blue"
              onClick={signInWithGoogle}
              variant="solid"
            >
              Sign In with Google
            </Button>
            <Divider />
            <Button
              leftIcon={<MdOutlineFacebook />}
              colorScheme="facebook"
              variant="solid"
              onClick={signUpWithFacebook}
            >
              Sign In with FaceBook
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Auth;
