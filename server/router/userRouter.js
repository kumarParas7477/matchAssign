const userRepository = require("../repository/infoRepository");
const axios = require("axios");
module.exports = app => {
  app.get('/NewMatchData', (req, res) => {
    axios({
      "method": "GET",
      "url": `https://cricapi.com/api/matches?apikey=${process.env.KEY}`,
      // "headers": {
      //     "content-type": "application/octet-stream",
      //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
      //     "x-rapidapi-key": process.env.KEY
      // }
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
      // "headers": {
      //     "content-type": "application/octet-streaym",
      //     "x-rapidapi-host": "covid-193.p.rapidapi.com"
      //     "x-rapidapi-key": process.env.KEY
      // }
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
  app.get("/users/:id", (req, res) => {
    console.log(req.body);
    userRepository.UserInfo(req.params.id, req.body).then(data => res.json(data));
  });

};
