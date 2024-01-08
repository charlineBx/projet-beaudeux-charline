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
exports.login = async (req, res) => {
  const utilisateur = {
    login: req.body.login,
    password: req.body.password
  };

  // Test
  let pattern = /^[A-Za-z0-9]{1,20}$/;
  if (pattern.test(utilisateur.login) && pattern.test(utilisateur.password)) {
     Utilisateur.findOne({ where: { login: utilisateur.login, password: utilisateur.password } })
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

exports.createUtilisateur = async (req,res) => {
  try {
    const utilisateur = {
      nom : req.body.nom,
      prenom: req.body.prenom,
      login: req.body.login,
      password: req.body.password,
      email: req.body.email
    };

    const nouvelUtilisateur = await Utilisateur.create({
      nom : utilisateur.nom,
      prenom : utilisateur.prenom,
      adresse : '',
      codepostal: '',
      ville: '',
      email : utilisateur.email,
      sexe: '',
      login : utilisateur.login,
      password : utilisateur.password,
      telephone:''
    });
    res.status(201).json({message : 'Utilisateur créé avec succès',  utilisateur: nouvelUtilisateur });
  } catch (error) {
    console.log(req.body);
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error:  `Erreur lors de la création de l\'utilisateur\n ` });
  }
};


