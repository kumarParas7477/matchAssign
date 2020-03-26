const User = require("../model/info");
class InfoRepository {
  getAllUsersInfo() {
    return User.find({}).then(data => data);
  }
  save(profile) {
    return User.create(profile)
      .then(p => p)
      .catch(error => console.log(error));
  }
  //   update(profile,id)
  // { console.log(id);
  //   return User.findOneAndUpdate( {"employeeId": id}, {$set: profile});
  // }
  UserInfo(username, match) {
    return User.findOneAndUpdate({ 'Username': username }, { $push: { favourites: { $each: [match] } } }).then(profile => profile).catch(error => console.log(error));
  }
}
module.exports = new InfoRepository();
