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
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
function Auth() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <div className="w-[50%] h-[50%] bg-gray-400 flex justify-center">home</div> */}
      <Tabs
        isFitted variant='enclosed'
        background={"gray.100"}
        size="md"
        w={"50%"}
        h={"auto"}
        className="p-3"
        colorScheme="green"
      >
        <TabList d={"flex"} justifyContent={"space-around"}>
          <Tab>Sign Up</Tab>
          <Tab>Sign In</Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            display={"flex"}
            justifyContent={"center"}
            flexDir="column"
            className="space-y-2"
          >
            <div className="">
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" border={"1px"} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" border={"1px"} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="text" border={"1px"} />
              </FormControl>
            </div>
            <div className="flex justify-center">or</div>
            <Button leftIcon={<FcGoogle />} colorScheme="blue" variant="solid">
              Sign Up with Google
            </Button>
            <Divider />
            <Button
              leftIcon={<MdOutlineFacebook />}
              colorScheme="facebook"
              variant="solid"
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
            <div className="">
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" border={"1px"} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" border={"1px"} />
              </FormControl>
            </div>
            <div className="flex justify-center">or</div>
            <Button leftIcon={<FcGoogle />} colorScheme="blue" variant="solid">
              Sign In with Google
            </Button>
            <Divider />
            <Button
              leftIcon={<MdOutlineFacebook />}
              colorScheme="facebook"
              variant="solid"
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
