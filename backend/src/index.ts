import { config } from 'dotenv';
import path from 'path';
import app from './server';

// load environment variables
config({ path: path.resolve(__dirname, '../.env') });

if (!process.env.PORT) {
    throw new Error('PORT is not defined in .env file');
}

const PORT = process.env.PORT;

// server runs on port specified in .env file
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
