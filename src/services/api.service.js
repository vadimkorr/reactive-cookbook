class ApiService {
    BASE_URL = 'http://localhost:52892';
    apis = {
        signup: '/api/accounts/register',
        submitRecipe: '/api/Recipes/submit'
    }

    post(url, body, headers) {
        let header = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'       
        }
        if (headers) Object.assign(header, header, headers)
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: header,
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

export default ApiService;