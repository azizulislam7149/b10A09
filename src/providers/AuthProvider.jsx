import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {
        name : 'Lingo Bingo',
        profession : 'wev-devel;oper',
        age : 36,
        hobby : 'To be skillful web-developer',
        book: '21 feb Book fair'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;