//express and router are required here too as  well as app.js
//calling this variable express here but app in the app.js file?
const express = require('express')
//my question is what does Router do? we did use that in app.js
const router = express.Router()

//the exercise asks to make an arr of obj students. this would normally be stored in a database
const students = [{id: 1, name: 'grant'}, {id: 2, name: 'brian'}, {id: 3, name:'Chris'}]

//next we need to create out get request
//when in our browser we navigate to this page, express needs to handle the http request
//note that we navigated here from app.js so the "/" is like :3000/student/......its the last slash
//we are already in the student route

//a get request is just server getting the requested info, whether its stored in  database or a variable inside this very file


//dont really need async await because the file is stored in this file. we arent watining for it; we would if we were
// getting info from a database
//async await not needed here because we are not querying a database and having to wait
router.get('/', (req, res, next)=>{
    try {
        res.send(students)
    } catch (err) {
        console.log('get request error is ', err)//just for us to see error in this example
        //next(err)//if not included it wont pass any error the the nect middleware and could return an error
    }
})
// now if we want to route to an individual property in the students array we can add an :id
// :id is like "dotting" into a object. if ther is any word after the SLASH that will be the varibale. its a catch all for routes that dont exist after the students route
//simple whatever the /:id becomes the key on the params object and the value is in the broser whatever is after the students/
//so you will get {id: 2} if two was after the students slash in your browser. this enables you (in this case) to search keys in the student object. later, i assume objects in a table
router.get('/:id', async (req, res, next)=>{
    //how to access the :id? answser: in the REQ.PARAMS
    try {
        console.log('req.params', Number(req.params.id))
        let studentRes = students.filter((stud) => {
            console.log('stud', stud)
            return stud.id === Number(req.params.id)//value is a sting
        })
        console.log('studentRes', studentRes)
        res.send(studentRes[0])
    } catch (err) {
        console.log('error', err)
        next(err)
    }
})

//create
router.post(()=>{})
//update
router.put(()=>{})
//delete
router.delete(()=>{})


//we are exporting the router here
//modules.exports is an empty object by default
module.exports = router


