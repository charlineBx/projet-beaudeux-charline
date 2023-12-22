const { v4: uuidv4 } = require ("uuid");
const { ACCESS_TOKEN_SECRET }  = require ("../config.js");

const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
  }

  const db = require("../models");
  const Utilisateur = db.utilisateur;
  const Op = db.Sequelize.Op;

// Find a single Utilisateur with an login
exports.login = (req, res) => {
  const utilisateur = {
    login: req.body.login,
    password: req.body.password
  };

  // Test
  let pattern = /^[A-Za-z0-9]{1,20}$/;
  if (pattern.test(utilisateur.login) && pattern.test(utilisateur.password)) {
     Utilisateur.findOne({ where: { login: utilisateur.login } })
    .then(data => {
      if (data) {
        const user = {
          id: data.id,
          name: data.nom,
          email: data.email
        };
      
        let accessToken = generateAccessToken(user);
        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Utilisateur with login=${utilisateur.login}.`
        });
      }
    })
    .catch(err => {
      res.status(400).send({
        message: "Error retrieving Utilisateur with login=" + utilisateur.login
      });
    });
  } else {
    res.status(400).send({
      message: "Login ou password incorrect" 
    });
  }
};
/*
let pattern = /^[A-Za-z0-9]{1,20}$/;
  if (pattern.test(utilisateur.login) && pattern.test(utilisateur.password)) {
    if(utilisateur.login === "emma" && utilisateur.password === "toto"){

      const uuid = uuidv4 ();
        const utilisateur = {
          nom: "Maurice",
          prenom: "Emmanuel",
          login: "emma",
          email : "emmanuel.maurice@gmail.com",
          password : "toto",
          id : uuid
        };
        const user = {
          id: utilisateur.id,
          name: utilisateur.nom,
          email: utilisateur.email
        };

        let accessToken = generateAccessToken(user);
        res.setHeader('Authorization', `Bearer ${accessToken}`);

        console.log (accessToken);
        
        res.send(utilisateur);
    
      }  
    };    
*/ 


