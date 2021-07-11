var axios = require('axios').default;

(async () => {
    try {
        await axios.post('http://my-host.local:3000', { test: 'test' }, {
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