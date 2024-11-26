import app from "./src/app.js";

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`WSV start with port ${PORT}`)
});

//khi bam ctrl + c
process.on('SIGINT', () => {
    server.close(() => console.log('Exit server'));
});