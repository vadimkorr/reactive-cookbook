export default class ApiService {
    BASE_URL = 'http://localhost:52892';
    apis = {
        signup: '/api/accounts/register'
    }

    post(url, body, headers) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'                 
                },
                body: JSON.stringify(body)
            })
            .then(resp => {
                console.log("POST result: ", resp);
                res(resp.json());
            })
            .catch((err)=> {
                console.log("POST error: ", err);
                rej(err);
            });
        });
    }

    login() {

    }

    signup(data) {
        return this.post(this.BASE_URL + this.apis.signup, data);
    }
}