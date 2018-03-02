'use strict'

import express from 'express'
import apiController from '../controller/api'

const router = express.Router();

router.get('/digest/*', apiController.getDigest);
router.get('/labels', apiController.getLabels);
router.get('/article/:id', apiController.getArticleById);

module.exports = router