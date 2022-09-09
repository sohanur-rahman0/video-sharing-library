const { User } = require('../models')
module.exports = {
  checkIfUserExists: (email) => {
    return User.findOne({ email })
  },
  create: (user) => {
    return User.create(user)
  },
  find: (query) => {
    return User.find(query)
  },
  findOne: (query) => {
    return User.findOne(query)
  },
  findById: (id) => {
    return User.findById(id)
  },
  update: (id, user) => {
    return User.findByIdAndUpdate(id, user)
  },
  delete: (id) => {
    return User.findByIdAndDelete(id)
  },
}
