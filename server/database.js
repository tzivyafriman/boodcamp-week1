const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/store',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } 
),  () =>
    {
        try{

        }catch(error)
        {
            console.log(error);
        }
    };
    
const connection =  mongoose.connection;
connection.once('open', ()=>{
    console.log('connection to db sucsses!!!!!!!!!!');
})

// mongoose.disconnect('mongodb://localhost:27017/store',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// } 
// ),  () =>
// {
//     try{
//         console.log("disconect!");

//     }catch(error)
//     {
//         console.log(error);
//     }
// };
//connection.close().then(s => console.log("disconect!!!!!!!"));
// connection.once('close', ()=>{
//     console.log('disconction to db sucsses!!');
// })