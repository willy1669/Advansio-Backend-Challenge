import Joi from '@hapi/joi';
import joiFormatter from '../helpers/joi-formatter.js';
import { userService } from '../services/userService.js';

/**  registration field vlaidator */
const registerValidation = async (req, res, next) => {
  const { body } = req;
  const { email } = body;

  //validate user inputs
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(body);

  if (error) {
    const { message } = error.details[0];
    const formattedMessage = joiFormatter(message);
    return res.status(400).send({
      status: false,
      error: formattedMessage,
    });
  }

  //check if user already exist
  const user = await userService.find({ email });

  if (user) {
    return res.status(400).send({
      status: false,
      error: 'This user already exists',
    });
  }

  // req.user = user;
  return next();
};

export default registerValidation;
