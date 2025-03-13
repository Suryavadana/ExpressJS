import React,{useState} from 'react'
import axios from 'axios';
const AddToCart = () => {
    const [data, setData]=useState(
        {
            id: '',
            name: '',
        }
    )

    const HandlerChange=e=>{
        const {name,value} = e.target; //destructure the name and value from the event target
        setData(prevData =>({
            ...prevData,
            [name]:value, //update specific field
        }));
        console.log('Data Submitted')
    }   

    const SubmitHandler = async e =>{
        e.preventDefault();
        try{
            const response= await axios.post('http://localhost:5000/addproducts' ,data);  //put is to update 
            console.log('Response: ',response);
            alert('Form Submitted', data);
        }
        catch(error)
        {
            console.log('Error submitting data:' ,error);
        }
    }
    
      // Inline styles
      const formStyles = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const inputStyles = {
        width: '80%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
    };

    const buttonStyles = {
        width: '85%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    // const alertStyles = {
    //     color: 'green',
    //     fontWeight: 'bold',
    //     marginTop: '10px',
    // };

  return (

    <div style={formStyles}>
        <form onSubmit={SubmitHandler}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add to Cart</h2>
            <input type='text' value={data.id} name='id' onChange={HandlerChange} placeholder='Enter ID' style={inputStyles}/>
            <input type='text' value={data.name} name='name' onChange={HandlerChange} placeholder='Enter Name' style={inputStyles}/>
            <input type='submit' value='submit' placeholder='submit' style={buttonStyles}/>
        </form>
        {/* <p style={alertStyles}>Form Submitted</p> */}
    </div>
  )
}

export default AddToCart
