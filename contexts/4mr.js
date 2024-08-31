
contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getDatabase } from '../database';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initializeDb = async () => {
      const database = await getDatabase();
      setDb(database);
    };

    initializeDb();
  }, []);



  const register = async (username, password) => {
    const db = await getDatabase();
    try {
      const result = await db.runAsync(
        'INSERT INTO Users (username, password) VALUES (?, ?)',
        [username, password]
      );
      const newUser = { id: result.insertId, username };
      setUser(newUser);
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      throw new Error('Username already exists');
    }
  };

  const login = async (username, password) => {
    const db = await getDatabase();
    const result = await db.getFirstAsync(
      'SELECT * FROM Users WHERE username = ? AND password = ?',
      [username, password]
    );
    if (result.length > 0) {
      const loggedInUser = { id: result[0].id, username: result[0].username };
      setUser(loggedInUser);
      await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };


// // Login user
//  const loginUser = async (username, passcode) => {
//   try {
//     const hashedPasscode = await hashPasscode(String(passcode));
//     const user = await db.getFirstAsync(
//       'SELECT * FROM users WHERE username = ? AND passcode = ?',
//       [username, hashedPasscode]
//     );
//     if (user) {
//       return user;
//     } else {
//       throw new Error('Invalid credentials');
//     }
//   } catch (error) {
//     if (error.message === 'Passcode must be a string') {
//       throw new Error('Invalid passcode format');
//     }
//     throw error;
//   }
// };


  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
