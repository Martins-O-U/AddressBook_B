const router = require('express').Router();
let admin = require("firebase-admin");
let serviceAccount = require("../../admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL
});

let db=admin.firestore();

router.post('/create',async (req,res)=>{
  let docRef=db.collection('user')
  try {await docRef.add({
    email: req.body.user.email,
    phoneNumber: req.body.user.phoneNumber,
    name: req.body.user.name,
    address: req.body.user.address,
    //password: req.body.user.password
  });
   res.json({message: 'Contact added to list'});
} catch (error) {
    return res.status(500).json({ message: "Something went wrong" + error.message });

  }
})

router.get('/get', async (req, res) => {
  let usr=[]
  try{
    const users = await db.collection('user').get()
    if (users.docs.length > 0) {
      for (const user of users.docs) {
       usr.push(user.data())
    }}
    res.json(usr)
  }  catch (error) {
      return res.status(500).json({ message: "Something went wrong" + error.message });
  }

})

router.patch('/update',async (req,res) => {
  let docRef=db.collection('user').doc(req.body.user.name)
  try{ await docRef.update({
    email: req.body.user.email,
    phoneNumber: req.body.user.phoneNumber,
    name: req.body.user.name,
    address: req.body.user.address
  })
  res.json({message:'Edit on contact completed'});
} catch (error) {
  return res.status(500).json({ message: "Something went wrong" + error.message });
}
})

router.delete('/delete',async (req,res) => {
  try {
    await db.collection('user').doc(req.body.user.name).delete()
    res.json({message:'Contact has been deleted successfully'});
  } catch (error) {
      return res.status(500).json({ message: "Something went wrong" + error.message });
  }
})

module.exports = router