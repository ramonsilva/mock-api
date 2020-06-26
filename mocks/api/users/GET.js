module.exports = function (request, response) {
    if (!request.get('X-Auth-Key')) {
        response.status(403).send({"error": "you are not allowed"});
    } else {
        response.sendFile('GET.json', {root: __dirname});
    }
}