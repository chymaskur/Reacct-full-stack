import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: data.imageURL
    }
    const url = `http://localhost:5000/addEvent`;

    console.log(eventData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response'))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set('key', '0acec4b7370f6c871d849c140c5613cc')
    imageData.append('image', event.target.files[0]);



    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const classes = useStyles();
  return (
    <div>
      <div className="title"><h1 > ADMIN SECTION</h1></div>

      <div className="form-div">

        <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
          <input className="inputField" name="name" defaultValue="" required ref={register} />
          <br /><br />
          <input name="exampleRequired" type="file" onChange={handleImageUpload} />
          <br />  <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <button type="submit">Add Product</button>
          <button >Delete Product</button>
          {/* <input className="inputField" type="submit" /> */}

        </form>

      </div>

    </div>
  );
};

export default Admin;