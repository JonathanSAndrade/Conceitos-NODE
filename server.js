// Node.js 18+ tem fetch nativo
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function makeRequest() {
  try {
    const response = await fetch('https://api.exemplo.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

makeRequest();
import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('Lista de usuarios')

})

app.post('/usuarios', (req, res) => {
    res.send('Olá')

})

app.listen(3000)

