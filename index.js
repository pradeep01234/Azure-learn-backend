const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'project_study',
    password: 'admin'
})

app.get("/",(_,resp)=>{
    resp.send("working")
})
// console.log(conn);
app.post("/register",(req,resp)=>{
    try{
        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            job_role: req.body.job_role,
            address: req.body.address,
            city: req.body.city,
            pin: req.body.pin,
            date: req.body.date
        }

        //logic
        const query = `insert into test values('${userData.first_name}','${userData.last_name}','${userData.email}','${userData.job_role}','${userData.address}','${userData.city}','${userData.pin}','${userData.date}')`
        conn.query(query)
        console.log(req.body);
        resp.status(200).send({sent:"successful"})
        
    }catch(error){
        resp.status(505).send({sent:error})
    }
})


app.listen(process.env.PORT||process.env.port||8000,()=>{
    console.log("running");
})