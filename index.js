const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const personsEngaged = [];

app.get('/', (req,res) =>{
    res.send('Hello World');
});
app.get('/api/courses', (req,res) =>{
    res.send([1,2,3]);
});

app.post('/personsEngaged', (req,res) => {
    const data = req.body;
    personsEngaged.push(data);
    res.send(personsEngaged);
    //console.log(personsEngaged[0].data[0]);
});

app.get('/personsEngaged', (req,res)=>{
    res.send(personsEngaged);
});

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    res.send(course);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));