const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URL} = require('./config');
const app = express();

// Routes
const postRoutes = require('./routes/api/posts');

// Body parser Middleware
app.use(express.json());

// Connect to mongodb
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('MongoDB connected')).catch((err) => console.log(err));



//app.get('/', (req, res) => {
//res.send('Backend');
//});

//User routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server connected'));
