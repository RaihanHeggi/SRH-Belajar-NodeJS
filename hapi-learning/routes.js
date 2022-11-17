const route = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan metode tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = "stranger" } = request.params;
            const{ lang } = request.query;

            if (lang === 'id'){
                return `Hai, ${username}!`;
            }

            return `Hello, ${username}!` 
             
        },
    },
    {
        method:'POST',
        path: '/',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    },
];

module.exports = route;