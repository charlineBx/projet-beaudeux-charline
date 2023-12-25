module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
  
      titre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false
      },    
      prix: {
          type: Sequelize.INTEGER,
      },
      qte: {
        type: Sequelize.INTEGER,
    },
      image: {
          type: Sequelize.STRING,
      },
      
   });
  return Produit;
  };