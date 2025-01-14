const app = require('./app');
require('dotenv').config();
require('./database/index');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));