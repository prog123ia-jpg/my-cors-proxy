const host = '0.0.0.0';
const port = process.env.PORT || 8080;
const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // Autorise tout le monde
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Proxy tournant sur le port ' + port);
});
