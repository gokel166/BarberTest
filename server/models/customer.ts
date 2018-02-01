import * as mongoose from 'mongoose';


const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: { type: String, unique: true, lowercase: true, trim: true, max: 80 },
    barberLoc: String,
    commentFeed: {type: String, max: 300},
    contactNum: { type: Number, min: 10, max: 10 }
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;