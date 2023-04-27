import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
} from '@chakra-ui/react'
import { MdOutlineDelete } from "react-icons/md"
import { FiEdit3 } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';
import "./formdata.css"

export default function FormData() {


    const [note, setNote] = useState([])
    const navigate = useNavigate()

    const getNotes = () => {
        fetch("https://daylogic-s1id.onrender.com/data/", {
            headers: {
                "Autherization": localStorage.getItem("token")
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                setNote(res)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getNotes()
    }, [])


    const handledelete = (Id) => {
        fetch(`https://daylogic-s1id.onrender.com/data/${Id}`, {
            method: "DELETE",
            headers: {
                "Autherization": localStorage.getItem("token")
            }
        })
            .then(res => {
                alert("are you sure want to delete")
                console.log(res)
                getNotes()
            })
            .catch(err => console.log(err))

    }

    return (

        <Box marginTop={"30px"}>
            <TableContainer>
                <Table className='styled_table' variant='striped' colorScheme='lightgrey' width="80%" margin={"auto"}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Image Url</Th>
                            <Th>Actions</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            note.map((el) => (
                                <Tr key={el._id}>
                                    <Td>{el.title}</Td>
                                    <Td>{el.description}</Td>
                                    <Td>{el.image.filename}</Td>
                                    <Th><MdOutlineDelete size={"20px"} color='black' onClick={() => handledelete(el._id)}  /></Th>
                                    <Th><Link to={`/update/${el._id}`}><FiEdit3 size={"20px"} color='black'/></Link></Th>
                                </Tr>
                            ))
                        }
                    </Tbody>

                </Table>
            </TableContainer>
            <Link to="/add"><Button  marginTop={"20px"} backgroundColor="rgb(106, 90, 205)" _hover={"none"}>Add</Button></Link>
        </Box>
    );
}