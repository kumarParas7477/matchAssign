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

  UserInfo(id) {
    return User.findOne({ '_id': id }).then(profile => profile).catch(error => console.log(error));
  }

  UpdateInfo(id1, match) {
    console.log(match);
    return User.findOneAndUpdate({ '_id': id1 }, { $push: { 'favourites': { $each: [match] } } }).then(profile => profile).catch(error => console.log(error));
  }
  deleteFavourites(id1, unique_id1) {

    return User.findOneAndUpdate({ '_id': id1 }, { $pull: { 'favourites': { "unique_id": unique_id1 } } }).then(profile => profile).catch(error => console.log(error));

  }

}
module.exports = new InfoRepository();
