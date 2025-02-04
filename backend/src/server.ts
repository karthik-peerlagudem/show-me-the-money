import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

// enabling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/api', router);

export default app;
