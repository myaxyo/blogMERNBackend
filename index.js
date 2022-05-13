import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import cors from 'cors'
const app = express();
const PORT = 5000;
app.use(cors())
app.use(express.json())

//Routers
app.use('/api/user', router);
app.use('/api/blog', blogRouter)


//mongoDB
mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.e8jjz.mongodb.net/Blog?retryWrites=true&w=majority'
);
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () =>
  console.log('Connection failed with - ', err)
);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
