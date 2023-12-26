module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {

      id: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull: false
      }, 
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