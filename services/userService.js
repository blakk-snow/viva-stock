
// userService.js
import { getDatabase } from '../database';

export const userService = {
  create: async (username, password) => {
    const db = await getDatabase();
    try {
      const result = await db.runAsync(
        'INSERT INTO Users (username, password) VALUES (?, ?)',
        [username, password]
      );
      console.log('User created successfully');
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  getByUsername: async (username) => {
    const db = await getDatabase();
    try {
      const user = await db.getFirstAsync(
        'SELECT * FROM Users WHERE username = ?',
        [username]
      );
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  update: async (id, updates) => {
    const db = await getDatabase();
    const updateFields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    try {
      const result = await db.runAsync(
        `UPDATE Users SET ${updateFields} WHERE id = ?`,
        [...values, id]
      );
      console.log('User updated successfully');
      return result;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  delete: async (id) => {
    const db = await getDatabase();
    try {
      const result = await db.runAsync('DELETE FROM Users WHERE id = ?', [id]);
      console.log('User deleted successfully');
      return result;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};
