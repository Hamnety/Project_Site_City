const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Настройка статических файлов
app.use(express.static(__dirname));

// Основной маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Маршруты для остальных страниц (если понадобятся)
app.get('/about', (req, res) => {
    res.redirect('/#about');
});

app.get('/history', (req, res) => {
    res.redirect('/#history');
});

app.get('/events', (req, res) => {
    res.redirect('/#events');
});

app.get('/gallery', (req, res) => {
    res.redirect('/#gallery');
});

app.get('/news', (req, res) => {
    res.redirect('/#news');
});

app.get('/contacts', (req, res) => {
    res.redirect('/#contacts');
});

// Обработка 404 ошибок
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://94.103.13.139:${PORT}`);
    console.log(`📁 Раздача файлов из директории: ${__dirname}`);
    console.log(`🌐 Сайт посёлка Лужки доступен по адресу выше`);
});

// Обработка ошибок
process.on('uncaughtException', (err) => {
    console.error('Необработанная ошибка:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Необработанный отказ промиса:', promise, 'причина:', reason);
    process.exit(1);
}); 