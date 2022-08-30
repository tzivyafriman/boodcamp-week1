const express = require("express");
const usersBL = require('../BL/usersBL');
const router = express.Router();
const jwt = require("jsonwebtoken");

const accessTokenSecret = 'someRandomAccessToken';
// const refreshTokenSecret = 'someRandomStringForRefreshToken';

//הפונקציה הזו היא פונ שכל הקריאות אמורות לעבוד דרכה 
//והיא בודקת את הטוקן רק במקרה שהוא באמת תקין היא תעבור לקריאה
//זה מה שעושה ה-next()
const authenticateJWT = (req, res, next) =>
{
    const authHeader = req.headers.authorization;
    if(authHeader)
    {
        const token = authHeader.split(' ')[0];
        jwt.verify(authHeader,accessTokenSecret,(err, data)=>
        {
            if(err)
            {
                console.log(err);
                res.sendStatus(403);
            }else
            {
                req.user = data;
                next();
            }
        })
    }else
    {
        res.sendStatus(401);
    }
} 


// router.route('/')
// .get(async (req, res) =>
// {
//     let data = await usersBL.getAllUsers();
//     res.json(data);
// })

router.route('/signUp')
.post(async (req, res)=>
{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let date = req.body.date;
    console.log("in route: " +password, date);
    let data = await usersBL.signUp(name, email, password, date)
    .then(data => 
        res.status(201).send({
        message: "User Created Successfully",
        data,
      }))
    .catch(data => 
        res.status(500).send({
        message: "Error creating user",
        data,
      }));
})
router.route('/')
.post(async (req, res) => {
    // let email = req.body.email;
    // let password = req.body.password;
    console.log('i log');
    // console.log('Password:' + password +'emails:' + email);
    let data = 
    await usersBL.login(/*email,password*/req.body)
    /*.then(data => { 
        res.status(200).send({
            message: "Login Successful " + data,
            data: accessTokenSecret
            // data: data.Token
            // email: user.email,
            // token,
        });
    }) 
    
    .catch(err => { 
        res.status(400).send({
            message: "Passwords does not match",
            err,
        });
    });*/
    res.json(data)
});



module.exports = router;

// login endpoint
// app.post("/login", (request, response) => {
//     // check if email exists
//     User.findOne({ email: request.body.email })
  
//       // if email exists
//       .then((user) => {
//         // compare the password entered and the hashed password found
//         bcrypt
//           .compare(request.body.password, user.password)
  
//           // if the passwords match
//           .then((passwordCheck) => {
  
//             // check if password matches
//             if(!passwordCheck) {
//               return response.status(400).send({
//                 message: "Passwords does not match",
//                 error,
//               });
//             }
  
//             //   create JWT token
//             const token = jwt.sign(
//               {
//                 userId: user._id,
//                 userEmail: user.email,
//               },
//               "RANDOM-TOKEN",
//               { expiresIn: "24h" }
//             );
  
//             //   return success response
//             response.status(200).send({
//               message: "Login Successful",
//               email: user.email,
//               token,
//             });
//           })
//           // catch error if password does not match
//           .catch((error) => {
//             response.status(400).send({
//               message: "Passwords does not match",
//               error,
//             });
//           });
//       })
//       // catch error if email does not exist
//       .catch((e) => {
//         response.status(404).send({
//           message: "Email not found",
//           e,
//         });
//       });
//   });
  