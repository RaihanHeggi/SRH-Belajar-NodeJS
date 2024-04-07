const http =  require('http');
const fs  = require('fs');

const server  = http.createServer((req,res) => { 
    const url_path = req.url;
    const url_method = req.method;

    console.log(url_path)
    if(url_path == '/form_path'){
        res.write('<html>');
        res.write('<body><form action="/view_message" method="POST"><input type="text" name="message"/><button type="submit" id="btn_submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }



    if(url_path == '/view_message' && url_method == 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end(); 
    }


    if(url_path == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Hello World!</h1>');
        res.write('</html>');
        res.end(); 
    }else if(url_path == '/test'){       
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Hello World! Test</h1>');
        res.write('</html>');
        res.end();
    }

    
});

server.listen(3000);