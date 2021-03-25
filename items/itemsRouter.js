const router = require('express').Router();
const Items = require('./itemsModel.js');
const restricted = require('../auth/middleware/restrictred.js');
const validateItemsCon = require('../auth/middleware/validateItemsCon.js');
const validateItemId = require('../auth/middleware/validateItemId.js');