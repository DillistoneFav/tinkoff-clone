import React, {createContext, FC, useEffect, useMemo, useState} from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'
import {Alert} from "react-native";
import {auth, db, login, logout, register} from "../firebase";
import { doc, setDoc } from "firebase/firestore";

interface IContext {
    user: User | null;
    isLoading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const registrationHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            const {user} = await register(email, password)

            await setDoc(doc(db, "users"), {
                _id: user.uid,
                displayName: 'Your Name',
            });
        } catch (error) {
            Alert.alert(`Error register: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            await login(email, password)
        } catch (error) {
            Alert.alert(`Error login: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true)
        try {
            await logout()
        } catch (error) {
            Alert.alert(`Error logout: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user || null)
            setIsLoadingInitial(false)
        })
    }, [])

    const value = useMemo(
        () => ({
            user,
            isLoading,
            login: loginHandler,
            logout: logoutHandler,
            register: registrationHandler
    }), [user, isLoading])

    return (
        <AuthContext.Provider value={value}>
            {!isLoadingInitial && children}
        </AuthContext.Provider>
    )
}
