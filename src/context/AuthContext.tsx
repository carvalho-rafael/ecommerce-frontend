import React, { createContext } from 'react'
import useAuth from './hooks/useAuth';

const AuthContext = createContext({} as any);

function AuthProvider({ children }: any) {
    const { authenticated, user, handleLogin, handleLogout, loading } = useAuth();

    return (
        <AuthContext.Provider value={{ authenticated, user, handleLogin, handleLogout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
