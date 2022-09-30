const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('src'));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));