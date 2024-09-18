import api from '../api';
import { Request } from '../constants/Request';

export const startRequest = async (token: string) => {
    const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNTQ0NDQ0NDQiLCJqdGkiOiI0Y2VjNzdlMC1hMzg1LTQ2MDAtOGEwYS0yOGE1MDg1MmE2OGMiLCJleHAiOjE3MjY2OTcwMjUsImlzcyI6IllvdXJJc3N1ZXIiLCJhdWQiOiJZb3VyQXVkaWVuY2UifQ.9wMZqANLtD9DY3ZV0M0yvpdYmykl_tLo2fZsS2VNfi8"
    try {
        const response = await api.post('/api/Request/start', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token1}`,
                'Content-Type': 'application/json'
            },
            body: {
                'type': "a452d9c6-c690-47c6-9aee-bea38cfb7979"
            }
        });
        console.log(response);

        return response;
    } catch (error) {
        console.error('Error creating request:', error);
        throw error;
    }
};