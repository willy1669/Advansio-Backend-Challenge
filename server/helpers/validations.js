import Authenticate from './auth.js';

/** Authorization function */
const verifyAuthHeader = req => {
  try {
    if (!req.headers.authorization) {
      return { error: 'error' };
    }
    const token = req.headers.authorization;
    const payload = Authenticate.decode(token);

    return payload;
  } catch (err) {
    return { error: 'Invalid token' };
  }
};

const validations = {
  verifyAuthHeader,
};

export default validations;
