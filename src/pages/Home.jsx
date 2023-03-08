import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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

function Home() {
    const [jsonData, setJsonData] = useState([]);
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
  
    const setModalIdx = (i) => {
      setIdx(i);
      onOpen();
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
    <Button  colorScheme="blue" padding={10} variant="ghost">Logout</Button>
    {jsonData.map((obj, i) => {
        return (
          <div
            className="flex p-2 border-b-2 m-1 cursor-pointer"
            onClick={() => {
              setModalIdx(i);
            }}
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
      )}</>
  )
}

export default Home