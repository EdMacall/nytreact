const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");


/*
router
  .route("/api/articles/")
  .get(articlesController.findAll)
  .post(articlesController.test);

// Matches with "/api/articles/:id"
router
  .route("/api/articles/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);
  */

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

module.exports = router;
