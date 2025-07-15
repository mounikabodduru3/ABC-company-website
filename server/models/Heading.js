const mongoose = require('mongoose');
const headingSchema = new mongoose.Schema({ text: String });
module.exports = mongoose.model('Heading', headingSchema);
