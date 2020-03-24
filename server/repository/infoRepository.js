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
  // UserInfo(id)
  // {
  //    return User.find({'employeeId': id}).then(profile => profile);
  // }
}
module.exports = new InfoRepository();
