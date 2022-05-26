const express = require("express");
const router = express.Router();
const {
  deleteSupervisor,
  UpdateSupervisor,
  getAllSupervisor,
  createSupervisor,
  getSpecificSupervisor,
  getCoSupervisors,

} = require("../Controllers/supervisorController");

router.route("/").get(getAllSupervisor).post(createSupervisor);
router
  .route("/:id")
  .get(getSpecificSupervisor)
  .patch(UpdateSupervisor)
  .delete(deleteSupervisor);
router.route("/cosupervisors/:type").get(getCoSupervisors);

module.exports = router;
