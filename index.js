const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Server A</h1>
        <p>To access the secret file, you need to send a GET request to <button><a href ="https://cors-2-2qo7.onrender.com/file">Go To LAB</a></button> with the correct authorization token.</p>
        <p>Use the appropriate tools to bypass CORS and fetch the content of the file.</p>
    <p hidden>Token :" Authorization: Bearer thecyberhub " </p>
`);
});

app.listen(port, () => {
    console.log(`Server A listening at http://localhost:${port}`);
});
