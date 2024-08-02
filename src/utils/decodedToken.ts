import {jwtDecode } from 'jwt-decode'; // Thư viện để giải mã token JWT


export const decodedToken = (token: string) => {
    if(token) {
        const data = jwtDecode(token)
        return data
    }
};