const express = require('express');
const config =  require('config');

const app = express();

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/news', require('./routes/news.routes'));

const PORT = config.get('port') || 3001;

app.listen(PORT, () => {
    try{
    console.log(`Сервер запущен на ${PORT} порту!`);
    } catch (e) {
        app.close();
    }
});



