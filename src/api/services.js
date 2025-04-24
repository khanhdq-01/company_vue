import instanceApi from './instanceApi';
import API_ENDPOINTS from './endpoints';

export const AuthService = {
    login: (credentials) => {
        return instanceApi.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    },
    
    register: (userData) => {
        return instanceApi.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    },
    
    logout: () => {
        return instanceApi.get(API_ENDPOINTS.AUTH.LOGOUT);
    },
    
    getProfile: () => {
        return instanceApi.get(API_ENDPOINTS.AUTH.PROFILE);
    }
};

export const UserService = {
    getAll: () => {
        return instanceApi.get(API_ENDPOINTS.USER.GET_ALL);
    },
    
    getById: (id) => {
        return instanceApi.get(API_ENDPOINTS.USER.GET_BY_ID(id));
    },
    
    update: (id, userData) => {
        return instanceApi.put(API_ENDPOINTS.USER.UPDATE(id), userData);
    },
    
    delete: (id) => {
        return instanceApi.delete(API_ENDPOINTS.USER.DELETE(id));
    }
}; 