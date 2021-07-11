var axios = require('axios').default;

(async () => {
    try {
        await axios.post('https://cors.3lancers.dev/cors', { test: 'test' }, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': 'http://any-domain.com'
            },
        })
        console.log('ok')
    } catch (e) {
        console.log('fail')
        console.log(e)
    }
})();