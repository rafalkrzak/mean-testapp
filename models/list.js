const mongoose = require('mongoose');

const BucketlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    required: true,
    enum: ['High', 'Medium', 'Low']
  }
});

const BucketList = module.exports = mongoose.model('BUcketList', BucketlistSchema);

module.exports.getAllLists = (callback) => {
  BucketList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    BucketList.remove(query, callback);
}
