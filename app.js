import express from 'express'
import {join} from 'path'
const app= express();
import connectDb from './db/connect.js';
import web from './routes/web.js'
const port= process.env.PORT||'3000'
const Database_uri=process.env.Database_uri||"mongodb://127.0.0.1:27017"

//Database Connection
connectDb(Database_uri);


app.use(express.urlencoded({ extended: true}));

//Setting up Template Engine
app.set('view engine','ejs')

//Serving Static File
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))


//Loading Routes
app.use('/student',web)



app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port} `)
})