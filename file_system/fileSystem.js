// import fs from 'fs';

const fs = require('fs');
const path = require('path');

// Instaed of hardcoding the directory name './files/starter.txt'

// We use path because sometimes we can have error when some computer goes like (/) or(\) so we use path to prevent this

// __dirname :--> The folder we are ./file_system
// so path joins it with /files/starter.txt;
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8',(err, data) => {
    if(err) throw err;
    console.log(data);
});

// No need to specify UTF8 it is by default now
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if(err) throw err;
    console.log(`Write complete`);
    
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Adding new append file', (err) => {
        if(err) throw err;
        console.log(`Write complete`);
    });
});


// exit on uncaught errors
process.on('uncaughtException', (err) => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');

        console.log(data);

        await fsPromise.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)

        await fsPromise.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n Nice to meet you')

    } catch (error) {
        console.log(error);
    }
}

fileOps();