const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const VESSELX_VERSION = '3.0.0';

app.use(cors());
app.use(express.json());

app.get('/update', (req, res) => {
  res.json({ version: VESSELX_VERSION });
});

app.listen(PORT, () => {
  console.log(`VesselX updates server running on port ${PORT}`);
});
