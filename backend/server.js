const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/reports', reportRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
