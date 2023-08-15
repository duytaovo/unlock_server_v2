const db = require("../models");

module.exports.getPagesConfigs = async ({ ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };
      const response = await db.Page.findAll({
        where: query,
      });
      resolve({
        err: response ? 0 : 1,
        mes: response ? "Getss" : "Cannot found Page",
        PagesData: response,
      });
    } catch (error) {
      reject(error);
    }
  });
module.exports.updatePages = ({ part_id, ...body }) =>
  new Promise(async (resolve, reject) => {
    try {
      const page = await db.Page.findOne({ where: { part_id: part_id } });
      console.log(23);
      if (!page) {
        return resolve({
          err: 1,
          mes: "Cannot update work. ID not found",
        });
      }
      console.log(24);
      await page.update(body);
      resolve({
        err: 0,
        mes: `Page ${part_id} updated`,
      });
    } catch (error) {
      reject(error);
    }
  });
