import { getStorageSync, setStorageSync, removeStorageSync } from '@tarojs/taro'
import { storageKey } from '../config'

const storage = {
    get: (key) => getStorageSync(`${storageKey}${key}`),
    set: (key, value) => setStorageSync(`${storageKey}${key}`, value),
    remove: (key) => removeStorageSync(`${storageKey}${key}`)
}

export default storage

export const token = {
    get: () => storage.get('token'),
    set: (token) => storage.set('token', token),
    remove: () => storage.remove('token')
}