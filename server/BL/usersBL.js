
const userModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

signUp = (name, email, password, date) => {
    //console.log('in login,     name: ' + name, 'email: '+ email, 'addrees: ' + addrees+' password: '+ password);
    return new Promise((resolve, reject) => {
      //  bcrypt
      // .hash(password, 10)
      // .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new userModel({
          name: name,
          email: email,
          password:password,
          date: date
          // password: hashedPassword,
          
        });
        console.log(user.name, user.email, user.password, user.date);
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            resolve("save success"+ result);
            // res.status(201).send({
            //   message: "User Created Successfully",
            //   result,
            // });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            console.log('i error');
            reject(error);
            // res.status(500).send({
            //   message: "Error creating user",
            //   error,
            // });
          });
      // })
      // catch error if the password hash isn't successful
      // .catch((e) => {
      //   reject("Error")
      //   res.status(500).send({
      //     message: "Password was not hashed successfully",
      //     e,
      //   });
      // });
    })
    
}
const login = (/*email,password*/data) =>
{
  let email = data.email;
  let password = data.password;
  console.log('i login in bl');
    return new Promise(async (resolve, reject) => 
    {
      var users = await getAllUsers().then((users) => { return users});
      console.log('email: '+
      email+" password: ",password);
      const user = users.find(user => { return user.password === password /*&& user.email === email*/});
      console.log('i in promise b');
      if(user)
      {
        console.log('find user', user);
        const accessTokenSecret = 'someRandomAccessToken';
        const refreshTokenSecret = 'someRandomStringForRefreshToken';
        let refreshTokens = [];
        const accessToken = jwt.sign(
        {
        userId: user._id,
        userEmail: user.email,
        },
        accessTokenSecret,
        { expiresIn: "24h" }
        );
        const refreshToken = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        refreshTokenSecret,
        { expiresIn: "24h" }
        );
      resolve(
        accessToken,
        refreshToken
      )

      refreshTokens.push(refreshToken);


      }else
      {
        console.log('i dont find user');
        reject('your email or password is incorrect!')
      }
      

      // console.log('i login ');
      // userModel.findOne({ email:email })
      // // if email exists
      // .then((user) => 
      // {
      //   // compare the password entered and the hashed password found
      //   console.log('i findone hei!  password: '+password+ 'user.password: '+user.passwor);
      //   bcrypt.compare(password, user.password)
      //     // if the passwords match
      //     .then((passwordCheck) => {
      //       console.log(' i compare!');
      //       // check if password matches
      //       if(!passwordCheck) 
      //       {
      //           reject(error);
      //       //   return response.status(400).send({
      //       //     message: "Passwords does not match",
      //       //     error,
      //       //   });
      //       }
  
      //       //   create JWT token
      //       const token = jwt.sign(
      //       {
      //       userId: user._id,
      //       userEmail: user.email,
      //       },
      //       "RANDOM-TOKEN",
      //       { expiresIn: "24h" }
      //       );
  
      //       //   return success response
      //       resolve("tocken succsess"+token);
      //       // response.status(200).send({
      //       //   message: "Login Successful",
      //       //   email: user.email,
      //       //   token,
      //       // });
      //     })
      //     // catch error if password does not match
          
      //     .catch((error) => {
      //       reject(error);
      //       // response.status(400).send({
      //       //   message: "Passwords does not match",
      //       //   error,
      //       // });
      //     });
      // })
      // // catch error if email does not exist
      // .catch((e) => {
      //   reject("not found", e);
      //   // response.status(404).send({
      //   //   message: "Email not found",
      //   //   e,
      //   // });
      // });
    });
    
}
const getAllUsers = ()=>
{
    return new Promise((resolve, reject) => 
    {
        userModel.find({},/*.toArray*/(err, result) => 
        {
            if (err)
            {
                reject(err);
            }
            // for (i = 0; i < result.length; i++) 
            // {
            //     let p = result[i];
            //     console.log(p.name + ", " + p.email + ", " + p.password);
                
            // }
              resolve(result);
            
        })
    })   
}

const insertUser = (obj) => 
{
    console.log('obj: '+obj);
    return new Promise((resolve, reject) =>
    {
      const users = /*await*/ getAllUsers.then(data => {return(data),(err, data)=>
      {
        if(err)
        {
          reject(err);
        }
      }
      })
      const email = users.find(user => { return user.email === obj.email, (err, data)=>
        {
          if(err)
          {
            reject(err);
          }else
          {
            resolve(data);
          }
        } 
      })
      if(!email)
      {
        let u = new userModel(
            {
              "name": obj.name,
              "email": obj.email,
              "password": obj.password,
              "addrees": obj.addrees
            }
        )
        //למה נוצר לי שדה ריק בזמן הוספה???
        u.save((error, response)=>
        {  
            if (error) 
            {  
                reject(error);  
            }else{
                resolve('inserted!!')
            }  
        })
      }else
      {
        reject("this email already exists ");
      }
        
    })
}
module.exports = { signUp , login, insertUser, getAllUsers };
