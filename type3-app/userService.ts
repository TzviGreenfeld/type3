import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'; 
import { User } from './constants/User';

export const registerUser = async (user: User) => {
    try {
        const response = await api.post('/register', {
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            phone: user.getPhoneNumber(),
            age: user.getAge().toString(),
            longitude: user.getLocation().long.toString(),
            latitude: user.getLocation().lat.toString(),
            notificationToken: user.getNotificationToken(),
            deviceId: user.getDeviceId()
        });

        return response;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Rethrow the error if needed
    }
};

export const loginUser = async (phone: string) => {
    try {
        console.log('Logging in user with phone:', phone);
        const response = await api.post('/api/Auth/login', {
            "phoneNumber": phone
        });

        const token = response.data.token;
        console.log("login token", token) // Adjust according to the actual response structure
        await AsyncStorage.setItem('token', token);
        return response;

    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // Rethrow the error if needed
    }
}