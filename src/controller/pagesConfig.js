const {
  getPagesConfigs,
  updatePages,
} = require("../services/pagesConfigService");
const {
  interalServerError,
  badRequest,
} = require("../middlewares/handleError");
const joi = require("joi");
const { authenticateToken } = require("../middlewares/authenticateToken");
const {
  part_id,
  content,
  isDeleted,
  permision,
  special,
} = require("../helpers/joi_schema");
module.exports.getpagesConfig = async (req, res) => {
  try {
    console.log(1);
    const response = await getPagesConfigs(req.query);

    return res.status(200).json(response);
  } catch (error) {
    console.log(1);
    return res.status(401).json("Sai roi");
  }
};
module.exports.updatePages = async (req, res) => {
  try {
    const { error } = joi
      .object({ part_id })
      .validate({ part_id: req.body.part_id });

    if (error) {
      return badRequest(error.details[0].message, res);
    }
    console.log(req.body);
    const response = await updatePages(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(401).json("Sai roi");
  }
};
