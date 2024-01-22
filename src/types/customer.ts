import { Document, Types } from 'mongoose';

interface Address {
    line1: string;
    line2: string;
    postcode: string;
    city: string;
    state: string;
    country: string;
}

interface CustomerType extends Document {
    _id?: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
    createdAt?: Date;
}

export default CustomerType;
