const express = require('express'); //import express
const app = express(); //initialize app by calling express
app.use(express.json() ) //values given browser is recieved in json format
app.get('/', (req, res) => {
   res.send('<h1>Hello World!</h1>'); 
});

const products = [
    {
        id: 1,
        name: "iPhone"
    },
    {
        id: 2,
        name: "Samsung"
    },
    {
        id: 3,
        name: "Oneplus"
    }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const newData = products.filter(item => item.id.toString() === req.params.id); // Fixed comparison
    return res.send(newData);
});

app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(id,name);
    return res.send('Data Stored..!');
})
app.listen(5000, () => console.log('Server Running...')); //to run in the particular port we use listen
