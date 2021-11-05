module.exports = app => {
    const equipment = require("../controllers/equipment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", equipment.create);
  
    // Retrieve all Tutorials
    router.get("/", equipment.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", equipment.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", equipment.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", equipment.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", equipment.delete);
  
    // Delete all Tutorials
    router.delete("/", equipment.deleteAll);
  
    app.use('/api/equipment', router);
  };