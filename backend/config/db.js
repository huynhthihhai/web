import mongoose from 'mongoose';

export const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_CONECTION_STRING);

        console.log('Liên kết CSDL thành công');
    } catch (error) {
        console.error('Lỗi kết nối CSDL', error);
        process.exit(1);
    }
};