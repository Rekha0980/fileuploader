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

export default function FormData() {


    const [note, setNote] = useState([])
    const navigate = useNavigate()

    const getNotes = () => {
        fetch("http://localhost:8000/data/", {
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
        fetch(`http://localhost:8000/book/${Id}`, {
            method: "DELETE",
            headers: {
                "Autherization": localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res)
                getNotes()
            })
            .catch(err => console.log(err))

    }

    return (

<Box>
        <TableContainer>
            <Table variant='striped' colorScheme='lightgrey' width="80%" margin={"auto"}>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Image</Th>
                        <Th>Actions</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {
                        note.map((el) => (
                            <Tr key={el._id}>
                                <Td>{el.title}</Td>
                                <Td>{el.description}</Td>
                                <Td>25.4</Td>
                                <Th><MdOutlineDelete size={"20px"} /></Th>
                                <Th><FiEdit3 size={"20px"} /></Th>
                            </Tr>
                        ))
                    }



                </Tbody>

            </Table>
        </TableContainer>
        <Link to="/add"><Button>Add</Button></Link>
        </Box>
    );
}