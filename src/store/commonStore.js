import {AsyncStorage} from 'react-native';

const storeItem = async (key, item) => {
    console.log(`storeItem ${item}`);
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        console.log(`storeItem: ${jsonOfItem}`);
        return jsonOfItem;
    } catch (error) {
        console.log(error.message);
    }
};

const retrieveItem = async (key) => {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        console.log(`retrieveItem: ${JSON.stringify(item)}`);
        return item;
    } catch (error) {
        console.log(error.message);
    }
    return null;
};

const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error.message);
    }
};

const CommonStore = {
    storeItem, retrieveItem, removeItem
};

export default CommonStore;

