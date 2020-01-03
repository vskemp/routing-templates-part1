const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    let name = req.url.substring(1,req.url.length);
    let content = ("Hello, " + name + "!");
    const specialNames = {
        "Toby" : "It's the best boy, Toby!",
        "Mochi" : "You're tail is so small, Mochi!",
        "Booger" : "You're looking very gray today, Boogey!"
    }
    if (Object.keys(specialNames).includes(name)) {
        content = specialNames[name];
        // content = "Thank you for gracing us with your amazing meow, " + name;
    } 
    res.end(content);
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});