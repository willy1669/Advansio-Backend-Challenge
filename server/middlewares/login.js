import Joi from '@hapi/joi';
import joiFormatter from '../helpers/joi-formatter.js';
import Usermodel from '../db/index';


const { User } = Usermodel;

/** registration field vlaidator */
const loginValidation = async (req, res, next) => {
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
const user = await User.findOne({ where: { email }});

  if (!user) {
    return res.status(400).send({
      status: false,
      error: 'User does not exist',
    });
  }

  req.user = user;

  console.log('000', req.user)

  return next();
};

export default loginValidation;
