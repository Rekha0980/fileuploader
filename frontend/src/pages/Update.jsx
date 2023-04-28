import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate, useParams, Link } from "react-router-dom"
import { Button, Input ,Box} from "@chakra-ui/react"





 const Update=()=> {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const params=useParams()
  const navigate=useNavigate()
  let id=params.id

//   const singlData=async()=>{
//   const res=await fetch(`http://localhost:8000/data/${id}`)
//   const all=await res.json()
 
//   }
//   singlData()

useEffect(() => {
    // Fetch the existing data for the specified ID
    axios.get(`https://daylogic-s1id.onrender.com/data/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(error => {
        console.error('Failed to fetch image data:', error);
      
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch(`https://daylogic-s1id.onrender.com/data/${id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (response.ok) {
        const updatedImage = await response.json();
        console.log('Image updated:', updatedImage);
        navigate("/alldata")
        
      } else {
        console.error('Failed to update image:', response.statusText);
      }
    } catch (error) {
      console.error('Internal server error:', error.message);
    }
  };

  return (
    <Box width={"50%"} margin={"auto"}>
    <form onSubmit={handleSubmit}>
        <Input type="text" value={title} placeholder="Enter Title" onChange={(event) => setTitle(event.target.value)} />
        <Input value={description} placeholder="Enter Description" onChange={(event) => setDescription(event.target.value)} />
        <Input type="file" onChange={(event) => setImageFile(event.target.files[0])} />
    
     <Button type="submit">Update</Button>
    </form>
    </Box>
  );
}

export default Update
