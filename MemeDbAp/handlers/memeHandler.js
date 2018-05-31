const VIEW_ALL_FILE_PATH = './views/viewAll.html'
const DETAILS_FILE_PATH = './views/details.html'
const ADD_MEME_FILE_PATH = './views/addMeme.html'
const REPLACE_ME_STR = '<div id="replaceMe">{{replaceMe}}</div>';
const CONTENT_TYPE_HTML = 'text/html';
const IMAGES_COUNT = 5; //1000
const DB_PATH = __dirname + '/../db/db.json';

const db = require('../db/db.json');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');
const shortId = require('shortid');
const mv = require('mv');

module.exports = (req, res) => {
    if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
        viewAll(req, res)
    } else if (req.pathname === '/addMeme' && req.method === 'GET') {
        viewAddMeme(req, res)
    } else if (req.pathname === '/addMeme' && req.method === 'POST') {
        addMeme(req, res)
    } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
        getDetails(req, res)
    } else {
        return true
    }
}

function addMeme(req, res) {
    let form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) {
            console.log(err);
            return;
        }

        let tempPath = form.openedFiles[0].path;
        let fileName = form.openedFiles[0].name;
        let ext = fileName.substr(fileName.lastIndexOf('.'));

        let memeStorage = __dirname.concat(['/../public/memeStorage/']);

        fs.readdir(memeStorage, (err, files) => {
            let lastFolderIndex = files.length - 1;
            memeStorage += lastFolderIndex;

            fs.readdir(memeStorage, (err, innerFiles) => {
                let folderDirectoriesCount = innerFiles.length;

                if (folderDirectoriesCount >= IMAGES_COUNT) {
                    memeStorage = memeStorage.substr(0, memeStorage.lastIndexOf('/')) + '/'
                    memeStorage += files.length;

                    fs.mkdir(memeStorage, () => {
                        console.log('new folder !');

                        someFunc(lastFolderIndex + 1, ext, tempPath, fields, res)
                    });
                } else {
                    someFunc(lastFolderIndex, ext, tempPath, fields, res)
                }
            });
        })


    })
}

function someFunc(folderDirectoriesCount, ext, tempPath, fields, res) {
    const imageFullPath = __dirname.concat(
        ['/../public/memeStorage/' + folderDirectoriesCount + '/' + shortId.generate() + ext]
    );

    mv(tempPath, imageFullPath, function (err) {
        if (err) console.log(err);

        let meme = {
            id: shortId.generate(),
            title: fields.memeTitle,
            memeSrc: imageFullPath.substr('E:\\GITHUB\\ExpressJSFundamentals\\MemeDB\\handlers/.'.length),
            description: fields.memeDescription,
            privacy: fields.status === undefined ? 'off' : fields.status,
            dateStamp: Date.now()
        }

        fs.readFile(DB_PATH, (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            let json = JSON.parse(data)
            json.push(meme)

            fs.writeFile(DB_PATH, JSON.stringify(json), () => {
                responseFound(res, CONTENT_TYPE_HTML, '/');
            })
        })
    });
}

function viewAddMeme(req, res) {
    processGetRequest(ADD_MEME_FILE_PATH, '', res)
}

function getDetails(req, res) {
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    let currentMeme = db.filter(m => m.id === query.id)[0]

    let currentMemeHtml = `<div class="content">
             <img src="${currentMeme.memeSrc}" alt=""/>
             <h3>Title  ${currentMeme.title}</h3>
             <p> ${currentMeme.description}</p>
             <button><a href="${currentMeme.memeSrc}">Download Meme</a></button>
             </div>`

    // currentMemeHtmlFirstHalf = currentMemeHtml.substr(0, currentMemeHtml.indexOf('</body>'))
    // currentMemeHtmlSecondHalf = currentMemeHtml.substr(currentMemeHtml.indexOf('</body>') + 1)

    // currentMemeHtmlFirstHalf += '<script src="../public/js/downloadImage.js"></script>'

    // currentMemeHtml = currentMemeHtmlFirstHalf + currentMemeHtmlSecondHalf

    processGetRequest(DETAILS_FILE_PATH, currentMemeHtml, res)
}

function viewAll(req, res) {
    let replaceContent = '';

    for (let currentMeme of db) {
        if (currentMeme.privacy !== 'on') continue

        replaceContent += `<div class="meme">
                               <a href="/getDetails?id=${currentMeme.id}">
                               <img class="memePoster" src="${currentMeme.memeSrc}"/>          
                               </div>`;
    }

    processGetRequest(VIEW_ALL_FILE_PATH, replaceContent, res)
}

function processGetRequest(pathToFile, replaceContent, res) {
    fs.readFile(pathToFile, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        if (replaceContent !== '')
            data = data.toString().replace(REPLACE_ME_STR, replaceContent);

        responseOk(res, CONTENT_TYPE_HTML, data);
    })
}

function responseFound(res, contentType, location) {
    res.writeHead(302, {
        'Content-Type': contentType,
        'Location': location
    })

    res.end()
}

function responseOk(res, contentType, data) {
    res.writeHead(200, {
        'Content-Type': contentType
    })

    res.end(data)
}