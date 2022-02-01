const { Email } = require("@material-ui/icons");
const connection = require("../../infra/database/connection");

const getById = async (id) => {
  const results = await Users.findOne({
                            attributes:['email'],
                              where: {
                                id: `${id}`
                              }
             });
 
  //   `SELECT email FROM users WHERE id = ${id}`
  // );

  
  return results.rows;
};

module.exports = {
  getById,
};
