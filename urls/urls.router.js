const express = require("express");
const router = express.Router();
const controller = require("./urls.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// route for urls 
router.route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

// route for a urlId 
router.route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

// route for :urlId/uses 
router.route("/:urlId/uses")
  .get(controller.listUses)
  .all(methodNotAllowed);

// route for :urldId/uses/:useId 
router.route("/:urlId/uses/:useId")
  .get(controller.readUse)
  .delete(controller.delete)
  .all(methodNotAllowed);


module.exports = router;
