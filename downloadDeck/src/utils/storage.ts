import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeDataToStorage = async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}
export const removeDataFromStorage = async (key: string) => {
    await AsyncStorage.removeItem(key)
}

export const getDataFromStorage = async (value: any) => {
    let data: any = await AsyncStorage.getItem(value)
    let newData = JSON.parse(data)
    return newData
}

export const clearData = async () => {
    await AsyncStorage.clear()
}
