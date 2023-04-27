import { Button, Heading, Input ,Box } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Add = () => {
    const [title, setTitle] = useState("")
    const [description, setDesc] = useState("")
    const [file, setFile] = useState("")
    const navigate=useNavigate()

    const handlesubmit = () => {
        if(!title||!description||!file){
            alert("required")
            navigate("/add")
            
        }
        else{
        const formData = new FormData();
        formData.append('image', file);
        formData.append("title", title)
        formData.append("description", description)
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem("token")
        };

        axios.post('https://daylogic-s1id.onrender.com/data/upload', formData, { headers })
            .then(res => {
                alert("file uploaded")
navigate("/alldata")
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
        }
    }


    return (
        <div>
            <Heading>Add your data</Heading>
            <Box width="40%" margin={"auto"} marginTop={"30px"}>
                <Input type="text" name="title" placeholder="Enter Title" isRequired value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input type="text" name="description"  marginTop={"10px"}isRequired placeholder="Enter Description" value={description} onChange={(e) => setDesc(e.target.value)} />
                <Input type="file" name="image"  marginTop={"10px"} isRequired accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <Button  marginTop={"10px"} onClick={handlesubmit}>Submit</Button>
                </Box>
        </div>
    )
}

export { Add }