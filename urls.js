const axios = require('axios');
const fs = require('fs');
const args = process.argv;

async function getFileUrls(file) {
    const lines = fs.readFileSync(file, 'utf8', function(err, data) {
        if (err) {
            console.log(`Could not read file ${file}`);
            process.exit(1);
        }
    });

    const urls = lines.split(/\r?\n/);
    for (const url of urls) {
        const content = await getUrlContent(url);
        if (!content.error) {
            const pattern = /\/\/[a-zA-Z]{2,}\.[a-zA-Z]{2,3}/;
            const matched = url.match(pattern)
            const path = matched[0].slice(2);
            await writeContents(path, content.data);
            console.log(`Wrote to ${path}`)
        }
        else
            console.log(`Couldn't download ${url}`)
    }
}

async function writeContents(path, content) {
    fs.appendFile(path, content, 'utf8', function(error, data) {
        if (error) {
            console.log(error.message);
            process.exit(1);
        }
    });
}

async function getUrlContent(url) {
    const response = {error:true}
    try {
        const res = await axios.get(url, {responseType: 'html'});
        response.error = false;
        response.data = res.data;
    } catch (error) {
        response.data = error.cause;
    }
    return response;
}

getFileUrls(args[2]);