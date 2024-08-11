const express = require("express");
const router = express.Router();
const controller = require("./uses.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// route for uses list 
router.route("/")
  .get(controller.list)
  .all(methodNotAllowed); 

// route for a :useId 
router.route("/:useId")
  .get(controller.read)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;

