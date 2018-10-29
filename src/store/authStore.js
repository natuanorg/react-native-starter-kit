import {observable, action, reaction, computed,configure, runInAction} from 'mobx';
import CommonStore from './commonStore';
import NavigatorService from '../navigation/Navigator';
import AuthApi from '../api/Auth';
import _ from 'lodash';
export const USER_KEY = 'user';

configure({enforceActions: "always"});

class AuthStore {

    @observable inProgress = false;
    @observable user;

    setUser(user) {
        runInAction(() => {
            this.user = user;
        });
    }

    @action login = async () => {
        const response = await AuthApi.loginUser();
        console.log(`response: ${JSON.stringify(response)}`);
        if (response && response.errorCode === '000') {
            await CommonStore.storeItem(USER_KEY, response.data);
            this.setUser(response.data);
            return true;
        }
        return false;
    };

    @action logout = async () => {
        console.log('logout');
        await CommonStore.removeItem(USER_KEY);
        this.setUser(null);
        NavigatorService.navigate('SignIn');
    };

    @computed get isAuthenticated(){
        console.log(`isAuthenticated: ${JSON.stringify(this.user)}`);
        return typeof this.user != "undefined" && !_.isNull(this.user);
    }

    async loadFromStore() {
        return await CommonStore.retrieveItem(USER_KEY);
    }
}

export default new AuthStore();