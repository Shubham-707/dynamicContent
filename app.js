const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello User! Try searching for http:/localhost:3000/profile/YOUR_NAME')
})

app.get('/profile/:idName', (req, res) => {
    console.warn(req.params.idName)
    res.render('profile', { name: req.params.idName })
})

app.listen(PORT, () => {
    console.log(`server is listening at PORT no. http://localhost:${PORT}`);
})