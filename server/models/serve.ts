import * as mongoose from 'mongoose';

const serveSchema = new mongoose.Schema({
    emailAddress: { type: String, unique: true, lowercase: true, trim: true, max: 80 },
    cost: Number,
    recommend: Boolean
});

const Serve = mongoose.model('Serve', serveSchema);

export default Serve;