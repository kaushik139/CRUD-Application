const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const client = require('./connection.js')

const app = express()
const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(bodyParser.json())

client.connect((err) => {
    if (!err) {
        console.log('Connected to Database');
    }
    else {
        console.log(err);
    }
})
// inserting values in database 
app.post('/users', (req, res) => {
    const userData = req.body;
    client.query(`INSERT INTO users (name,email,password,role) VALUES('${userData.name}','${userData.email}','${userData.password}','${userData.userType}')`, (err, result) => {
        if (!err) {
            // res.send(result.rows);
            res.send(`Sign Up successfull`)

        }
        else {
            // res.send(err.message);
            console.log(err.message);
            res.send('E-mail already Exists.');
        }
    });
    client.end;
})
// creating task 
app.post('/addTask/:id', (req, res) => {
    const taskData = req.body;
    const uid = req.params.id;
    client.query(`INSERT INTO tasks (user_id,task,status,date1,date2,time1,time2) VALUES('${uid}','${taskData.task}','${taskData.status}','${taskData.date1}','${taskData.date2}','${taskData.time1}','${taskData.time2}')`, (err, result) => {
        if (!err) {
            res.send('Task Added');
        }
        else {
            console.log(err.message)
        }
    });
    client.end;
})

// fetching user info 
app.get('/users/:email', (req, res) => {
    const umail = req.params.email;
    // console.log();
    client.query(`SELECT * FROM users WHERE email='${umail}'`, (err, result) => {
        if (!err) {
            console.log(result.rows[0]);
            res.send(result.rows[0]);
        }
        else {
            console.log(err.message);
        }
    });
    client.end;
})

app.put('/updateTasks/:id', (req, res) => {
    const tid = req.params.id;
    console.log(req.body)
    const info = req.body;
    client.query(`update tasks set task = '${info.task}', status = '${info.status}', date1 = '${info.date1}', date2 = '${info.date2}', time1 = '${info.time1}', time2 = '${info.time2}' where task_id = '${tid}'`, (err, result) => {
        if (!err) {
            console.log(result.rows)
            res.send(`Updated Successfully`);
        }
        else {
            console.log(err.message);
        }
    });
    client.end;
})

// deleting task 
app.delete('/deleteTask/:id', (req, res) => {
    const tid = req.params.id;
    client.query(`Delete from tasks where task_id = ${tid}`, (err, result) => {
        if (!err) {
            res.send(`Deleted successfully`);
        }
        else {
            console.log(err.message);
        }
    });
    client.end;
})

// fetching task 
app.get('/tasks/:id', (req, res) => {
    const uid = req.params.id;
    console.log('1', uid);
    client.query(`SELECT * FROM tasks WHERE user_id=${uid}`, (err, result) => {
        if (!err) {
            // console.log(result.rows);
            res.send(result.rows);
        }
        else {
            console.log(err.message);
        }
    });
    client.end;
})

// fetching all tasks 
app.get('/tasks', (req, res) => {
    const uid = req.params.id;
    console.log('1', uid);
    client.query(`select * from tasks join users on tasks.user_id = users.id;`, (err, result) => {
        if (!err) {
            // console.log(result.rows);
            res.send(result.rows);
        }
        else {
            console.log(err.message);
        }
    });
    client.end;
})

// password verification 
app.post('/verification', (req, res) => {
    const userInput = req.body
    client.query(`SELECT password FROM users WHERE email = '${userInput.email}'`, (err, result) => {
        if (!err) {
            if (result.rows[0] && userInput.password === result.rows[0].password) {
                res.send('Valid user')
            }
            else {
                res.send('Invalid Credentials')
            }
        }
        else
            console.log(err.message);
    })
    client.end;
})


app.listen(3300, () => {
    console.log('Server listening at port 3300');
})