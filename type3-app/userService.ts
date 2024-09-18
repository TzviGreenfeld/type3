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

export const getUserById = async (userId: string) => {
    try {
        const response = await api.get(`/api/Users/${userId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            }
        ); // add headers

        const respondingUserData = response.data
        const user = new User(
            respondingUserData.firstName,
            respondingUserData.lastName,
            0,
            respondingUserData.phone,
            respondingUserData.age,
            respondingUserData.location,
            respondingUserData.notificationToken,
            respondingUserData.deviceId
        );

        console.log(`got user: ${user.getFullName()}`);
        return user;

    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}

export const getRequestingUserByRequestId = async (requestId: string) => {
    try {
        const response = await api.get(`/api/Request/${requestId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            }); // add headers

        const requestingUserData = response.data.requestUser;
        const user = new User(
            requestingUserData.firstName,
            requestingUserData.lastName,
            0,
            requestingUserData.phone,
            requestingUserData.age,
            requestingUserData.location,
            requestingUserData.notificationToken,
            requestingUserData.deviceId
        );
        console.log(`got request: ${response.data}`);
        return user;

    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}