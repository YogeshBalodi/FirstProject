import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home() {
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([]);
  const [user, setUser] = useState(null);
  const [idx, setIdx] = useState(0);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setJsonData(data);
    } catch (error) {
      return setJsonData([]);
    }
  };
  const Logout = async () => {
    await signOut(auth)
    navigate("/auth");
  };
  const setModalIdx = (i) => {
    setIdx(i);
    onOpen();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onAuthStateChanged(auth,(user) =>{
      if(user){
        setUser(user);
      }else{
        // setUser(null);
        navigate('/auth');
      }
    })
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-between p-2 items-center bg-black">
        <span className="text-xl text-white font-bold">{user&&user.email}</span>
        <Button
          onClick={Logout}
          colorScheme="blue"
          padding={3}
          variant="ghost"
        >
          Logout
        </Button>
      </div>
      {jsonData.map((obj, i) => {
        return (
          <div
            className="flex p-2 border-b-2 m-1 cursor-pointer"
            onClick={() => {
              setModalIdx(i);
            }}
            key={i}
          >
            <div className="flex w-[50%]">
              <span className="font-bold">Name: </span> {obj.name}
            </div>
            <div className="flex w-[50%]">
              <span className="font-bold">Email: </span>
              {obj.email}
            </div>
          </div>
        );
      })}

      {jsonData[idx] ? (
        <Modal isOpen={isOpen} size={"lg"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Box display={"flex"} flexDir={"column"}>
                <div className="flex font-normal">
                  <span className="font-bold">Name: </span> {jsonData[idx].name}
                </div>
                <div className="flex font-normal">
                  <span className="font-bold">Email: </span>
                  {jsonData[idx].email}
                </div>
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="font-bold">Description</div>
              <div className="font-thin">{jsonData[idx].body}</div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;
