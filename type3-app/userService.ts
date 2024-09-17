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