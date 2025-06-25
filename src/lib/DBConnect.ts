import mongoose from 'mongoose';
import { config } from 'dotenv';

config();
export const DBConnect = async () => {
    try {
        const DB_URL = process.env.DATABASE_URL;
        if (!DB_URL) {
            throw new Error('DB_URL environment variable is not defined');
        }
        await mongoose.connect(DB_URL);
    }
    catch (error) {
        console.log("Error: ", error);
    }
}