const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    section: { type: String, required: true },
    content: {
        en: { type: mongoose.Schema.Types.Mixed },
        ar: { type: mongoose.Schema.Types.Mixed}
    }
});

const Content = mongoose.model("PageContent", contentSchema);
module.exports = Content
