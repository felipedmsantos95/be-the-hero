const app = require('./app')

const portServer = 3333;

app.listen(portServer, () => {
    console.log(`Back-end running on port ${portServer}!`);
})