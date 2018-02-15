class ApiService {
    BASE_URL = 'http://localhost:52892';
    apis = {
        signup: '/api/accounts/register',
        login: '/api/accounts/signin',
        submitRecipe: '/api/Recipes/submit'
    }

    post(url, body, headers) {
        let header = {
            //'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
            //,'Credentials': 'same-origin'     
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
                try {
                    res(resp.json());// ? resp.json : resp.ok);
                } catch (error) {
                    console.log(error)
                }
                
            })
            .catch((err)=> {
                console.log("POST error: ", err);
                rej(err);
            });
        });
    }

    signup(data) {
        return this.post(this.BASE_URL + this.apis.signup, data);
    }

    login(data) {
        return this.post(this.BASE_URL + this.apis.login, data);
    }
}

export default ApiService;