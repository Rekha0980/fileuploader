import React, { useEffect } from 'react'
import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import {MdOutlineDelete} from"react-icons/md"
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // const [liked, setLiked] = useState(false);

    // const [note, setNote] = useState([])
    // const navigate=useNavigate()

    // const getNotes=()=>{
    //     fetch("http://localhost:8000/book/", {
    //         headers: {
    //             "Autherization": localStorage.getItem("token")
    //         }
    //     }).then(res => res.json())
    //         .then(res => {
    //             //console.log(res)
    //             setNote(res)
    //         })
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     getNotes()
    // }, [])

    
    // const handledelete = (Id) => {
    //     fetch(`http://localhost:8000/book/${Id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Autherization": localStorage.getItem("token")
    //         }
    //     })
    //         .then(res =>{
    //            console.log(res)
    //             getNotes()})
    //         .catch(err => console.log(err))
    
    // }

    return (

        <Heading>Welcome to Application</Heading>
    //     <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
    //         {note.map((el) => (
    //             <Box
    //                 w="xs"
    //                 rounded={'sm'}
    //                 my={5}
    //                 mx={[0, 5]}
    //                 overflow={'hidden'}
    //                 bg="white"
    //                 border={'1px'}
    //                 borderColor="black"
    //                 key={el._id}
    //             >
    //                 <Box h={'200px'} borderBottom={'1px'} borderColor="black">
    //                     <Img
    //                         src={
    //                             'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    //                         }
    //                         roundedTop={'sm'}
    //                         objectFit="cover"
    //                         h="full"
    //                         w="full"
    //                         alt={'Blog Image'}
    //                     />
    //                 </Box>
    //                 <Box p={4}>
    //                     <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
    //                         {el.title}
    //                     </Heading>
    //                     <Text color={'gray.500'} noOfLines={2}>
    //                         {el.note}
    //                     </Text>
    //                     <Text>{el.category}</Text>
    //                 </Box>
    //                 <HStack borderTop={'1px'} color="black">
    //                     <Flex
    //                         p={4}
    //                         alignItems="center"
    //                         justifyContent={'space-between'}
    //                         roundedBottom={'sm'}
    //                         cursor={'pointer'}
    //                         w="full">
    //                         <Text fontSize={'md'} fontWeight={'semibold'}>
    //                             View more
    //                         </Text>
    //                         <MdOutlineDelete fontSize={'25px'} onClick={()=>{
    //                             const confbox=window.confirm("sure")
    //                             if(confbox===true){
    //                             handledelete(el._id)}}}/>
    //                         <BsArrowUpRight />
    //                     </Flex>
    //                     <Flex
    //                         p={4}
    //                         alignItems="center"
    //                         justifyContent={'space-between'}
    //                         roundedBottom={'sm'}
    //                         borderLeft={'1px'}
    //                         cursor="pointer"
    //                         onClick={() => setLiked(!liked)}>
    //                         {liked ? (
    //                             <BsHeartFill fill="red" fontSize={'24px'} />
    //                         ) : (
    //                             <BsHeart fontSize={'24px'} />
    //                         )}
    //                     </Flex>

    //                 </HStack>
    //             </Box>
    //         ))}
    //     </Box>
    );
}