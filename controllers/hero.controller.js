const Hero = require('../models/hero.model');

const getHeroSection = async (req, res) => {
    const { lang } = req.params
    try {
        const heroInfo = await Hero.findOne({ section: 'Hero' });
        res.status(200).json({ success: true, data: heroInfo.content[lang] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

const createHeroSection = async (req, res) => {
    const { lang } = req.params
    const data = req.body
    try {
        const heroInfo = new Hero({
            section: 'Hero',
            content: {
                [lang]: data
            }
        })
        await heroInfo.save();
        console.log("Hero Section is created successfully");
        res.status(201).json({ success: true, message: "Hero section created successfully", data: heroInfo.content[lang] })
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ success: false, message: 'Error in creating hero section' });
    }
};

const updateHeroSection = async (req, res) => {
    const { lang } = req.params;
    const data = req.body;
    try {
        const heroInfo = await Hero.findOne({ section: 'Hero' });
        if (!heroInfo) {
            return res.status(404).json({ success: false, message: 'Hero section not found' });
        }

        // Initialize content[lang] if it doesn't exist
        if (!heroInfo.content[lang]) {
            heroInfo.content[lang] = {};
        }

        // Merge the new data with existing data
        heroInfo.content[lang] = {
            ...heroInfo.content[lang],
            ...data
        }
        await heroInfo.save();
        console.log("Hero section updated successfully");
        res.status(200).json({ success: true, message: "Hero section updated successfully", data: heroInfo.content[lang] })
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ success: false, message: 'Error in updating hero section' });
    }
}

module.exports = {
    getHeroSection,
    createHeroSection,
    updateHeroSection
}