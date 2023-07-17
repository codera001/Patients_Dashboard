

const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const session = require('express-session');
const app = express();
const path = require('path');

// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["POST, GET"],
//     credentials: true
// }))

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Message: "we need token please provide it." })
    } else {
        jwt.verify(token, "our-jsonwebtoken-secret key", (err, decoded) => {
            if (err) {
                return res.json({ Message: "Authentication error" })
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}
// router.get("/", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//      });


app.get('/home', verifyUser, (req, res) => {
   return res.json({ Status: "Success", name: req.name })
 })

const db = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "signup" })
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO `login` (name,email,password) VALUES (?)";
    const values = [
        username = req.body.name,
        email = req.body.email,
        password = req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        } else
            return res.json(data);
    })
})

app.post('/', (req, res) => {
    const sql = "SELECT * FROM `login` WHERE email = ? AND password = ?";
    const values = [
        username = req.body.name,
        email = req.body.email,
        password = req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "Server side error" });
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" })

        } else {
            return res.json({ Message: "No data existed" })
        }

    })

});

app.get('/logout', (req, res)=> {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

app.listen(8081, () => { console.log("listening") })