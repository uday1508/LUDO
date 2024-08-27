import {MMKV} from 'react-native-mmkv'

const Storage = new MMKV();

const reduxStorage = {
    setItem : (key , value) => {
        Storage.set(key,value)
        return Promise.resolve(true);
    },
    removeItem:(key) => {
        Storage.delete(key);
        return Promise.resolve();
    },
    getItem:(key) => {
        const value = Storage.getString(key);
        return Promise.resolve(value);
    }
}

export default reduxStorage;