const joi = require("joi");
// module.exports.email = joi
//   .string()
//   .pattern(new RegExp("gmail.com$"))
//   .required();

// module.exports.password = joi
//   .string()
//   .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
//   .required();

module.exports.part_id = joi.string().required();
module.exports.content = joi.string().required();
module.exports.isDeleted = joi.number().required();
module.exports.permision = joi.number().required();
module.exports.special = joi.number().required();
