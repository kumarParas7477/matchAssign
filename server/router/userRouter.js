const userRepository = require("../repository/infoRepository");
const axios = require("axios");
module.exports = app => {
  app.get('/NewMatchData', (req, res) => {
    axios({
      "method": "GET",
      "url": `https://cricapi.com/api/matches?apikey=${process.env.KEY}`,

    })
      .then((response) => res.json(response.data))
      .catch((error) => {
        console.log(error)
      })
  })
  app.get('/OldMatchData', (req, res) => {
    axios({
      "method": "GET",
      "url": `https://cricapi.com/api/cricket?apikey=${process.env.KEY}`,

    })
      .then((response) => res.json(response.data))
      .catch((error) => {
        console.log(error)
      })
  })

  app.get('/stats/:id', (req, res) => {
    axios({
      "method": "GET",
      "url": `https://cricapi.com/api/cricketScore?apikey=${process.env.KEY}&unique_id=${params.id}`,

    })
      .then((response) => res.json(response.data))
      .catch((error) => {
        console.log(error)
      })
  })

  app.get("/users", (req, res) => {
    userRepository.getAllUsersInfo().then(data => res.json(data));
  });
  app.put("/createProfile", (req, res) => {
    userRepository.save(req.body).then(users => res.json(users));
  });
  app.patch("/users/:id", (req, res) => {
    console.log(req.body);
    userRepository.UpdateInfo(req.params.id, req.body).then(data => res.json(data));
  });
  app.get("/users/:id", (req, res) => {
    userRepository.UserInfo(req.params.id).then(data => res.json(data));
  })
  app.delete("/users/:id", (req, res) => {

    userRepository.deleteFavourites(req.params.id, req.body).then(data => res.json(data));
  })

};
