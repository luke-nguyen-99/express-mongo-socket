const User = require('../data/user/user.model');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).exec();

  if (!user) {
    res.status(400).send('username not found');
  }
  User.findByIdAndDelete
  User.findByIdAndRemove
}