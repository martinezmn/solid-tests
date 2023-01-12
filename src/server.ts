import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.set('strictQuery', true);
mongoose
  .connect('mongodb://exads_mongo:27017/exads-mongo')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(3005, () => {
  console.log('Server running...');
});
