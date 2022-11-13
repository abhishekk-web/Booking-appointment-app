
const path = require('path');
const Data = require('../models/data');

// exports.getAddData = (req, res, next) => {
//     console.log("hello");
//     res.send('<h1>hello</h1>')
//   };
  
exports.postAddData = async (req, res, next)=>{

    try{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    const data = await Data.create({name: name, email: email, phone: phone})
        res.status(201).json({allUsers: data});
        // res.redirect('/add-data');
    
    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }

}

exports.getUsers = (req, res, next) => {

    Data.findAll()
    .then(data=>{
        res.status(200).json({allUsers: data});
        console.log(data.allUsers);
    })
    .catch(err=>{
        console.log(err)
    })

}

exports.getDeleteUser = async (req, res, next) => {

    try{
        if(!req.params.id == 'undefined'){
            console.log('ID is missing');
            return res.status(404).json({err: 'ID is mssing'})
        }

    const userId = req.params.id;
    const name = req.params.dataname;
    console.log("user id is : "+ userId);
    console.log('no data yet '+ name);
    await Data.destroy({where: {id: userId}});
    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500).json(err);
    }
    
}

