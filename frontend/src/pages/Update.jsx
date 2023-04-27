import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate, useParams,Link } from "react-router-dom"
import { Button, Input } from "@chakra-ui/react"




const Update = () => {
    //console.log(note)
    const [title, setTitle] = useState("")
    const [description, setDesc] = useState("")
    const [file, setFile] = useState("")
    const navigate = useNavigate()

    const params = useParams()
    console.log(params)
    let id = params._id


    // const updataUser = async (data, id) => {
    //     const res = await axios.patch(`http://localhost:8000/users/${id}`, data);
    //     if (res.status === 200) {
    //         alert("user updated successfully")
    //         console.log(res.data)
    //     }
    // }
    // const navigate = useNavigate();





    const handleSubmit = (e) => {
        e.preventDefault()
        if (title == "" && description == "") {
            alert("enter filleds")
        }
        // else {
        //     updataUser(state, id)

        //     setTimeout(() => navigate("/"), 500)
        // }



    }
    // const handleChnage = (e) => {
    //     let { name, value } = e.target;
    //     setState({ ...state, [name]: value })
    // }
    // console.log(state)

    return (
        <div style={{ marginTop: "100px" }}>


            <form onSubmit={handleSubmit} style={{
                margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"
            }}>

                <Input type="text" name="title" placeholder="Enter Title" isRequired value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input type="text" name="description" marginTop={"10px"} isRequired placeholder="Enter Description" value={description} onChange={(e) => setDesc(e.target.value)} />

                <Input type="file" name="image" marginTop={"10px"} isRequired accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
               <Link to="/alldata"><Button marginTop={"10px"} type="submit">Update</Button></Link>
            </form>
        </div>
    )
}
export default Update