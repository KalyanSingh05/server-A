const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Server A</h1>
        <button onclick="loadTextFile()">Load Text File from Server B</button>
        <pre id="file-content"></pre>
        <script>
            function loadTextFile() {
                fetch('https://server-b-eight.vercel.app/file', {
                    method: 'GET',
                    credentials: 'include'
                })
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
                .then(data => {
                    document.getElementById('file-content').textContent = data;
                })
                .catch(error => console.error('Error:', error));
            }
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Server A listening at http://localhost:${port}`);
});
