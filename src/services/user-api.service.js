import { ApiService, BASE_URL, Urls } from './api.service';

const UserApiService = {
    signup: (data) => {
        return ApiService.post(BASE_URL + Urls.signup, data);
    },
    login: (data) => {
        let fullUrl = BASE_URL + Urls.login;
        return ApiService.post(fullUrl, data);
    }
}

export default UserApiService;