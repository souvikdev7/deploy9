const express = require("express");
const app = express();
const PORT =  3000;
const router = require('./routes/route');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',router);


/////////////////////////////////////////////////

// Page Not Found
app.use(function(req, res) {
    res.status(404).send("Sorry Page Not Found");
});

app.listen(PORT,()=>{   
    console.log(`Server running on port ${PORT}`);
}); 