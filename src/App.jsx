import { Box, ChakraProvider } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jsonData,setJsonData] = useState([])
  const fetchData = async () =>{
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments")
      setJsonData(data)
    } catch (error) {
      return setJsonData([])
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <ChakraProvider>
<Accordion  allowMultiple>
  {jsonData.map((obj,i)=> {return (<AccordionItem key={i}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <div className="flex ">
          <div className="flex w-[50%]"><span className="font-bold">Name: </span> {obj.name}</div>
          <div className="flex w-[50%]"><span className="font-bold">Email: </span>{obj.email}</div>
          </div>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel borderTop={1} pb={4}>
      <h2 className='fo font-bold'>Description</h2>
      <p>
      {obj.body}
      </p>
      
    </AccordionPanel>
  </AccordionItem>)})}
</Accordion>
    </ChakraProvider>
    
  );
}

export default App;
