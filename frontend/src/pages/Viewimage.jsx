import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const Viewimage=()=> {
const params=useParams()    
    const id=params.id
    console.log("id",id)
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    axios.get(`https://daylogic-s1id.onrender.com/data/${id}/img`, { responseType: 'arraybuffer' })
      .then(response => {
        const imaag = new Blob([response.data], { type: 'image/jpeg' });
        setFileData(imaag);
      }).catch(error => {
        console.error(error);
        alert('Error while fetching file');
      });
  }, [id]);

  return (
    <div>
    <div style={{margin:"auto",alignItems:"center",width:"80%",padding:"10px"}}>
      {fileData &&
        <object data={URL.createObjectURL(fileData)} type="image/jpeg" width="50%" height="250px">
          <p>Unable to display PDF file.</p>
        </object>
      }
    </div>
    <Link to="/alldata"><Button>Go back</Button></Link>
    </div>
  );
}