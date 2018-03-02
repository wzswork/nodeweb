'use strict'

import express from 'express'
import ApiController from '../controller/apiController'

const router = express.Router();
// router.get('/digest/*', apiHandle.getDigest);
router.get('/labels', ApiController.getLabels);
// router.get('/article/:id', apiHandle.getArticleById);

export default router