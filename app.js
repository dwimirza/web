const http = require('http');
const fs = require('fs')
const port = 3000;

const render = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        }else{
            res.write(data);
        }
        res.end();
    })
}

function panggilCss(req, res) {
    if(req.url == '/style.css'){
        res.writeHead(200,{
            'Content-Type' : 'text/css'
    });
    const fileContents = fs.readFileSync('./style.css',{encoding: 'utf8'});
    res.write(fileContents);
    res.end();
}
}


http.createServer((req, res) => {
    res.writeHead(200, {
    'Content-Type' : 'text/html'
})
 
panggilCss(req, res);
const url = req.url;

switch (url) {    
    case '/form':
        render('./form.html', res)
        break
    default:
        render('./index.html', res)
        break
}

})
.listen(port, () => {
    console.log(`Server is listening on port ${port}`); 
});

