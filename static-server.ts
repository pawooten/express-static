import * as express from "express";
import * as path from "path";

const app = express();

app.use('/',             express.static(path.join(__dirname, '..', 'static')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/main.html'));
// });

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});