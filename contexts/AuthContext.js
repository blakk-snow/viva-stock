// // AuthContext.js

// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { initDatabase } from '../database';
import { userService } from '../services/userService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initDatabase();
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize database:', error);
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  const register = async (username, password) => {
    try {
      await userService.create(username, password);
      setUser({ username });
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const login = async (username, password) => {
    try {
      const userRecord = await userService.getByUsername(username);
      if (userRecord && userRecord.password === password) {
        setUser({ id: userRecord.id, username: userRecord.username });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);













// import React, { createContext, useState, useContext, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getDatabase } from '../database';


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkUserLoggedIn();
//   }, []);

//   const checkUserLoggedIn = async () => {
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       if (userData) {
//         setUser(JSON.parse(userData));
//       }
//     } catch (error) {
//       console.error('Error checking user login status:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (username, password) => {
//     try {
//       const db = await getDatabase();
//       const result = await db.execAsync(
//         `SELECT * FROM Users WHERE username = ? AND password = ?`,
//         [username, password]
//       );
      
//       if (result.length > 0 && result[0].rows.length > 0) {
//         const userData = result[0].rows[0];
//         setUser(userData);
//         await AsyncStorage.setItem('user', JSON.stringify(userData));
//         return userData;
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };



//   const register = async (username, password) => {
//     if (!username || !password) {
//       throw new Error('Username and password must be provided');
//     }
  
//     try {
//       const db = await getDatabase();
  
//       // Insert the user into the database
//       await db.execAsync(
//         `INSERT INTO Users (username, password) VALUES (?, ?)`,
//         [username, password]
//       );
  
//       // Retrieve the inserted user
//       const result = await db.getFirstAsync(
//         `SELECT * FROM Users WHERE username = ?`,
//         [username]
//       );
  
//       if (result) {
//         setUser(result);
//         await AsyncStorage.setItem('user', JSON.stringify(result));
//         return result;
//       } else {
//         throw new Error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       if (error.message.includes('UNIQUE constraint failed')) {
//         throw new Error('Username already exists');
//       }
//       throw error;
//     }
//   };
  





//   const logout = async () => {
//     try {
//       setUser(null);
//       await AsyncStorage.removeItem('user');
//     } catch (error) {
//       console.error('Logout error:', error);
//       throw error;
//     }
//   };

//   const updateUserProfile = async (userId, updatedData) => {
//     try {
//       const db = await getDatabase();
//       const setClause = Object.keys(updatedData)
//         .map(key => `${key} = ?`)
//         .join(', ');
//       const values = [...Object.values(updatedData), userId];

//       await db.execAsync(
//         `UPDATE Users SET ${setClause} WHERE id = ?`,
//         values
//       );

//       const result = await db.execAsync(
//         `SELECT * FROM Users WHERE id = ?`,
//         [userId]
//       );

//       if (result.length > 0 && result[0].rows.length > 0) {
//         const updatedUserData = result[0].rows[0];
//         setUser(updatedUserData);
//         await AsyncStorage.setItem('user', JSON.stringify(updatedUserData));
//         return updatedUserData;
//       } else {
//         throw new Error('User update failed');
//       }
//     } catch (error) {
//       console.error('Update user profile error:', error);
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading, register, updateUserProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
