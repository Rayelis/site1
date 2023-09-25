const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.listen(port, () => console.log(`Listening on port ${port}`));

const send = require('gmail-send')({
    user: 'dsasonov24@gmail.com',
    pass: 'jnmanoiyjkyjyvpe',
    to: 'rayelis@mail.ru',
    subject: 'Заказ',
});
app.get('/send', async (req, res) => {

    let name = req.query.name;
    let phone = req.query.phone;

    let now = new Date()
    let now_string = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`

    send({
        text: `С вами желает связаться клиент по имени ${name} \nЕго телефон: ${phone} \nОтправлено в ${now_string}`,
    }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
    })
})