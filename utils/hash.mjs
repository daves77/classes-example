import bcrypt from 'bcrypt';

const SALT = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, SALT);
  return hash;
};

const comparePassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

export default { hashPassword, comparePassword };
