const express = require("express");
const path = require("path");
const app = express();
const port = 9000;




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
});

// about.pug
app.get('/about', (req, res)=>{
    const params = { }
    res.status(200).render('about.pug', params);
});

app.get('/products', (req, res)=>{
    const params = { }
    res.status(200).render('products.pug', params);
});

app.get('/service', (req, res)=>{
    const params = { }
    res.status(200).render('service.pug', params);
});

// almond.pug
app.get('/almond', (req, res)=>{
    const params = { }
    res.status(200).render('almond.pug', params);
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});