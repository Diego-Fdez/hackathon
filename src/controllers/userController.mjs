import UserModel from '../models/userModel.mjs';

//register a new user
export const registerUser = async (req, res) => {
  const { email } = req.body;
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    return res
      .status(400)
      .json({ message: 'User with this email already exist' });
  }

  const newUser = new UserModel(req.body);

  try {
    await newUser.save();
    res
      .status(201)
      .send({ status: 'OK', message: 'User register successfully!' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
