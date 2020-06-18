import express from 'express';

// auth Routes
import userRoute from './user.routes.js';
import commentRoute from './comment.routes.js';

import indexRoute from './index.routes.js';

// express router
const router = express.Router();

// Routes with user URl
router.use('/user', userRoute);

// Routes wit comment url
router.use('/comments', commentRoute);

router.use(indexRoute);

export default router;
