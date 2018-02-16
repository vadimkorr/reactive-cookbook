const ApiServiceHelper = {
    appendHeaders: (headers) => {
        let header = {
            //'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
            //,'Credentials': 'same-origin'     
        }
        Object.assign(header, header, headers)
        return header;
    },
    statusHelper: (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
    }
}

export const BASE_URL = 'http://localhost:52892';
export const Urls = {
    signup: '/api/accounts/register',
    login: '/api/accounts/signin',
    submitRecipe: '/api/Recipes/submit',
    getMyRecipes: '/api/recipes/get' 
}

export const ApiService = {
    get: (url, headers) => {
        let header = ApiServiceHelper.appendHeaders(headers);
        //return new Promise((res, rej) => {
            return fetch(url, {
                method: 'GET',
                headers: header
            })
            .then(ApiServiceHelper.statusHelper)
            .then(resp => resp.json())
            .catch(err => err);
        //});
    },
    post: (url, body, headers) => {
        let header = ApiServiceHelper.appendHeaders(headers);
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
    },
}