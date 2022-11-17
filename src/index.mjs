import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.mjs';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

//DB connection
const DbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${connection.connection.host}:
    ${connection.connection.port}`;
    console.log(url);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};
DbConnect();

app.use(morgan('dev'));
app.use(express.json());

//Listening to the port and logging the message.
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//Telling the app to use the route
app.use('/api/v1', userRoute);
