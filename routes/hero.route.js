const express = require('express');
const protect = require('../middlewares/protect');
const { getHeroSection, createHeroSection, updateHeroSection} = require('../controllers/hero.controller')
const router = express.Router();

router.get('/:lang', protect, getHeroSection);
router.post('/:lang', protect, createHeroSection);
router.put('/:lang', protect, updateHeroSection);

module.exports = router;