const express = require('express');
const app = express();
// const rootCall = (req, res) => res.sent('thank you very much');
app.get('/', (req, res) => {
    res.send('thank  very much');
})

app.listen(3000, () => console.log('listening to 3000'));