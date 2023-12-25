
exports.get = (req, res) => {
	const catalogue = [
			{ titre: "Liv Avail Advanced 1",description:"Vélo de rando/course", prix: 3000, qte: 5, image: "./assets/images/avail-advanced-1.jpg" },
			{ titre:  "Specialized Dolce Elite", description:"Vélo debutant route",prix: 1550.5, qte: 2 ,image: "./assets/images/specialized-dolce-elite.jpg"},
			{ titre: "Giant Talon 0",description:"VTT", prix: 950, qte: 1 ,image: "./assets/images/talon-29-0-giant.jpg"},
			{ titre:  "Liv Amiti 3 E+", description:"Vélo taff",prix: 2400.5, qte: 3,image: "./assets/images/amiti-eplus.jpg" },
			{ titre: "Canyon Aeroad CF SLX 8.0",description:"Vélo de course", prix: 6000, qte: 2, image: "./assets/images/canyon_cf_sxl.png" },
			{ titre:  "Canyon Ultimate CF SL 7.0", description:"Vélo de course",prix: 3000, qte: 1 ,image: "./assets/images/canyon_cf_sl_7.jpeg"},
			{ titre: "Canyon Speedmax CF SL 8.0",description:"Vélo de chrono", prix: 3999, qte: 4 ,image: "./assets/images/canyon_cf_sl_speedmax.jpg"}
	];
	const searchTerm = req.query.query.toLowerCase();
	console.log(searchTerm);
	// Vérifier si un terme de recherche est fourni
	if (searchTerm != "") {
	

	// Filtrer le catalogue en fonction du terme de recherche
	const filteredCatalogue = catalogue.filter(product =>
		product.titre.toLowerCase().includes(searchTerm) ||
		product.description.toLowerCase().includes(searchTerm)
		// Vous pouvez étendre la logique de filtrage à d'autres champs si nécessaire
	);

	res.setHeader('Content-Type', 'application/json');
	console.log("catalogue avec filtre.");
	res.send(filteredCatalogue);
}else{
	console.log("catalogue sans filtre.");
	res.send(catalogue);
}
};    




/*const db = require("../models");
  const Catalogue = db.Produit;
  const Op = db.Sequelize.Op;

  const catalogue = [
	{ titre: "Liv Avail Advanced 1",description:"Vélo de rando/course", prix: 3000, qte: 5, image: "./assets/images/avail-advanced-1.jpg" },
	{ titre:  "Specialized Dolce Elite", description:"Vélo debutant route",prix: 1550.5, qte: 2 ,image: "./assets/images/specialized-dolce-elite.jpg"},
	{ titre: "Giant Talon 0",description:"VTT", prix: 950, qte: 1 ,image: "./assets/images/talon-29-0-giant.jpg"},
	{ titre:  "Liv Amiti 3 E+", description:"Vélo taff",prix: 2400.5, qte: 3,image: "./assets/images/amiti-eplus.jpg" },
	{ titre: "Canyon Aeroad CF SLX 8.0",description:"Vélo de course", prix: 6000, qte: 2, image: "./assets/images/canyon_cf_sxl.png" },
	{ titre:  "Canyon Ultimate CF SL 7.0", description:"Vélo de course",prix: 3000, qte: 1 ,image: "./assets/images/canyon_cf_sl_7.jpeg"},
	{ titre: "Canyon Speedmax CF SL 8.0",description:"Vélo de chrono", prix: 3999, qte: 4 ,image: "./assets/images/canyon_cf_sl_speedmax.jpg"}
];

  exports.get = async (req, res) => {
	
	//if(req.query.query){
		
		const searchTerm = req.query.query.toLowerCase();
		//let pattern = /^[A-Za-z0-9]{1,20}$/;
		//if (pattern.test(searchTerm)) {
			const condition = {
				titre: {
					[Op.like]: `%${searchTerm}%` // Utilisation de l'opérateur LIKE pour chercher un titre similaire
				}
				};

				console.log(`Récupération des produits avec un titre similaire à "${searchTerm}"`);
				const produits = await Catalogue.findAll({ where: condition });
				console.log(produits);
			// Envoi des produits filtrés en tant que réponse
			res.setHeader('Content-Type', 'application/json');
			res.send(produits);

		//}else {
		//	res.status(400).send({
		//	message: "Saisie incorrect." 
		//	});
		//}
	
	/*}else{
		console.log("catalogue sans filtre.");
		const produits = await Catalogue.findAll();
		res.send(catalogue);
	}
   };*/   

/*
const catalogue = [
				{ titre: "Liv Avail Advanced 1",description:"Vélo de rando/course", prix: 3000, qte: 5, image: "./assets/images/avail-advanced-1.jpg" },
				{ titre:  "Specialized Dolce Elite", description:"Vélo debutant route",prix: 1550.5, qte: 2 ,image: "./assets/images/specialized-dolce-elite.jpg"},
				{ titre: "Giant Talon 0",description:"VTT", prix: 950, qte: 1 ,image: "./assets/images/talon-29-0-giant.jpg"},
				{ titre:  "Liv Amiti 3 E+", description:"Vélo taff",prix: 2400.5, qte: 3,image: "./assets/images/amiti-eplus.jpg" },
				{ titre: "Canyon Aeroad CF SLX 8.0",description:"Vélo de course", prix: 6000, qte: 2, image: "./assets/images/canyon_cf_sxl.png" },
				{ titre:  "Canyon Ultimate CF SL 7.0", description:"Vélo de course",prix: 3000, qte: 1 ,image: "./assets/images/canyon_cf_sl_7.jpeg"},
				{ titre: "Canyon Speedmax CF SL 8.0",description:"Vélo de chrono", prix: 3999, qte: 4 ,image: "./assets/images/canyon_cf_sl_speedmax.jpg"}
		];

		const searchTerm = req.query.query.toLowerCase();
		console.log(searchTerm);
		// Vérifier si un terme de recherche est fourni

		// Filtrer le catalogue en fonction du terme de recherche
		const filteredCatalogue = catalogue.filter(product =>
			product.titre.toLowerCase().includes(searchTerm) ||
			product.description.toLowerCase().includes(searchTerm)
			// Vous pouvez étendre la logique de filtrage à d'autres champs si nécessaire
		);
	
		res.setHeader('Content-Type', 'application/json');
		console.log("catalogue avec filtre.");
		res.send(filteredCatalogue);
*/