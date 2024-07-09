const mysql = require('mysql2/promise');
const express = require('express');

const CONFIG = {
    host: '34.68.134.0',
    user: 'root',
    database: 'game-lib'
};

const app = express();

app.use(express.json());
app.use((req, res, next)  => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

// FIX ME: method to get all games?

const findGameById = async (id) => {
    try {
        const conn = await mysql.createConnection(CONFIG);
        const [rows] = await conn.execute('FIX ME', [id]);
        conn.close();
        return rows[0];
    } catch (e) {
        throw e;
    }
}

app.listen('4000', () => {
    console.log('Listening on port 4000');
});

app.get('/api/games', async (req, res) => {
    // FIX ME
});

app.get('/api/games/:_id', async (req, res) => {
    res.json(await findGameById(req.params._id));
})


