const axios = require('axios');

// Patron Singleton
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// Patron Adaptador
const adapter = {
    get: url => instance.get(url),
    post: (url, body) => instance.post(url, body),
    put: (url, body) => instance.put(url, body),
    delete: (url) => instance.delete(url)
}

// module.exports = instance; // Usar sin Adptador
module.exports = adapter; // Uso de Adaptador