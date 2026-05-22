import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo.routes';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
