const host = '0.0.0.0';
const port = process.env.PORT || 8080;
const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], 
    requireHeader: ['origin', 'x-requested-with'],
    // ICI : On force les en-têtes pour Booking
    setHeaders: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'accept': 'text/calendar,text/plain,*/*',
        'accept-language': 'en-US,en;q=0.9',
    },
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Proxy avec camouflage actif sur le port ' + port);
});
