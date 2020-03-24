const userRepository = require("../repository/infoRepository");
module.exports = app => {
  app.get("/users", (req, res) => {
    userRepository.getAllUsersInfo().then(data => res.json(data));
  });
  app.put("/createProfile", (req, res) => {
    userRepository.save(req.body).then(users => res.json(users));
  });
  app.get("/users/:id", (req, res) => {
    userRepository.UserInfo(req.params.id).then(data => res.json(data));
  });
  app.put("/users/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    userRepository
      .update(req.body, req.params.id)
      .then(profiles => res.json(profiles));
  });
};
