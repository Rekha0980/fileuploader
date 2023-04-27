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
import axios from "axios"

export default function FormData() {


    const [note, setNote] = useState([])
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const [imag, setImgage] = useState("")

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
        fetch(`http://localhost:8000/data/${Id}`, {
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


    const getimage = (id) => {
        axios.get(`http://localhost:8000/data/${id}/img`, { responseType: 'arraybuffer' })
            .then(response => {
                const imaag = new Blob([response.data], { type: 'image/jpeg' });
                //console.log(imaag)
                setImgage(imaag);
            }).catch(error => {
                console.error(error);
                alert('Error');
            });
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
                                    <Td onClick={() => getimage(el._id)}>view</Td>
                                    <Td>
                                        {imag &&
                                            <object data={URL.createObjectURL(imag)} accept="image/jpeg" width="100%" height="100%" >
                                                <p>Unable to display image.</p>
                                            </object>
                                        }
                                    </Td>
                                    <Th><MdOutlineDelete size={"20px"} color='black' onClick={() => handledelete(el._id)} /></Th>
                                    <Th><Link to={`/update/${el._id}`}><FiEdit3 size={"20px"} color='black' /></Link></Th>
                                </Tr>
                            ))
                        }
                    </Tbody>

                </Table>
            </TableContainer>
            <Link to="/add"><Button marginTop={"20px"} backgroundColor="rgb(106, 90, 205)" _hover={"none"}>Add</Button></Link>
        </Box>
    );
}