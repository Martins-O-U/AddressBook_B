const router = require('express').Router();
// const db = require('./ContactHelper')


// router.get("/contactlist", (req, res) => {
//   db.getPersons
//       .then(parks => {
//           res.status(200).json(parks)
//       })
//       .catch(error => {
//           res.status(500).json({ message: "Oops!, Something went wrong. " + error.message})
//       })
// })

// const express = require('express')
// const router = express.Router()
var admin = require("firebase-admin");
let db = admin.firestore();


// router.post('/update', async (req, res) => {
//     let docRef = db.collection('user').doc(req.body.user.name)
//     await docRef.update({
//         email: req.body.user.email,
//         password: req.body.user.password,
//     })
//     res.json({ message: 'done' });
// })

// module.exports = router

router.post('/contactlist',async (req,res)=>{
  let docRef=db.collection('user').doc(req.body.user.name)
  await docRef.set({
    email: req.body.user.email,
    password: req.body.user.password,
  });
   res.json({message:'done'});
})

// router.post("/contactlist",  (req, res) => {
//     let {name, phoneNumber, email, address, note} = req.body;
//     if(name && phoneNumber){
//         db.addPerson(req.body)
//         .then(saved => {
//             res.status(201).json(saved)
//         })
//         .catch(error => {
//             res.status(500).json({message: "something went wrong:-. " + error.message});
//         })
//     }else{
//       res.json({message: "Please provide all needed columns (name, phoneNumber)"})
//     }
// })


// router.delete('/contactlist/:id',  (req, res) => {
  
//     db.removePerson(req.params.id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ Message: `A park with ID ${req.params.id} got deleted` });
//       } else {
//         res.status(404).json({ message: 'Could not find a park with given id' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Failed to delete park ' + error.message});
//     });
// });


module.exports = router