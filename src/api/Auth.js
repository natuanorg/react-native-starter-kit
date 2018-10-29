import request from './request';

const loginUser = async () => {
    const response = await request({
        url: '/bins/mg55o',
        method: 'get'
    });
    return response;
};

const AuthApi = {
    loginUser
};

export default AuthApi;