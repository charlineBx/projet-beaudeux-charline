const db = require("../models");
const Catalogue = db.produit;
const Op = db.Sequelize.Op;

exports.get = async (req, res) => {
        
	try {
        const searchTerm = req.query.query;
        
        // Utilisation de findAll avec un objet de filtre
        const catalogue = await Catalogue.findAll({
			where: {
				[Op.or]: [
				  {
					titre: {
					  [Op.like]: `%${searchTerm}%`
					}
				  },
				  {
					description: {
					  [Op.like]: `%${searchTerm}%`
					}
				  }
				]
			  }
        });
        
        res.setHeader('Content-Type', 'application/json');
        console.log("Catalogue avec filtre :", catalogue);
        res.send(catalogue);
    } catch (error) {
        console.error("Erreur lors de la récupération du catalogue :", error);
        res.status(500).json({ error: "Erreur lors de la récupération du catalogue" });
    }
   };    
