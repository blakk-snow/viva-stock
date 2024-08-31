// database.js
import * as SQLite from 'expo-sqlite';

let db;
let dbInitPromise;

const initDatabase = async () => {
  if (db) return db;

  try {
    db = await SQLite.openDatabaseAsync('vivastock_v_iv.db');
    await db.execAsync(`
        PRAGMA foreign_keys = ON;
        PRAGMA journal_mode = WAL;

        -- Users Table
        CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          username TEXT NOT NULL UNIQUE, 
          password TEXT NOT NULL
        );


      -- Categories Table
      CREATE TABLE IF NOT EXISTS Categories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL UNIQUE,
          description TEXT
      );

      -- Products Table (updated)
      CREATE TABLE IF NOT EXISTS Products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          category_id INTEGER,
          size TEXT,
          color TEXT,
          price REAL NOT NULL,
          quantity INTEGER NOT NULL,
          reorder_point INTEGER,
          image_url TEXT,
          FOREIGN KEY (category_id) REFERENCES Categories(id)
      );

      -- Sales Table
      CREATE TABLE IF NOT EXISTS Sales (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date DATETIME NOT NULL,
          total_amount REAL NOT NULL
      );

      -- SaleItems Table
      CREATE TABLE IF NOT EXISTS SaleItems (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          sale_id INTEGER,
          product_id INTEGER,
          quantity INTEGER NOT NULL,
          price REAL NOT NULL,
          FOREIGN KEY (sale_id) REFERENCES Sales(id),
          FOREIGN KEY (product_id) REFERENCES Products(id)
      );

      -- Backups Table
      CREATE TABLE IF NOT EXISTS Backups (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date DATETIME NOT NULL,
          file_name TEXT NOT NULL,
          status TEXT NOT NULL
      );

      -- Settings Table
      CREATE TABLE IF NOT EXISTS Settings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          key TEXT NOT NULL UNIQUE,
          value TEXT
      );

    `);
    console.log('Database initialized successfully');
    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

export const getDatabase = async () => {
  if (!dbInitPromise) {
    dbInitPromise = initDatabase();
  }
  return dbInitPromise;
};

// Export initDatabase so it can be used in App.js
export { initDatabase };




























// // database.js
// import * as SQLite from 'expo-sqlite';

// let db;
// let dbInitPromise;

// const initDatabase = async () => {
//   if (db) return db;

//   try {
//     db = await SQLite.openDatabaseAsync('vivastock_v03.db');
//     await db.execAsync(`
//         PRAGMA foreign_keys = ON;
//         PRAGMA journal_mode = WAL;

//         -- Users Table
//         CREATE TABLE IF NOT EXISTS Users (
//           id INTEGER PRIMARY KEY AUTOINCREMENT, 
//           username TEXT NOT NULL UNIQUE, 
//           password TEXT NOT NULL
//         );


//         -- Categories Table
//         CREATE TABLE IF NOT EXISTS Categories (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL UNIQUE,
//             description TEXT
//         );

//         -- Products Table (updated)
//         CREATE TABLE IF NOT EXISTS Products (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             description TEXT,
//             unit_price REAL NOT NULL,
//             category_id INTEGER,
//             FOREIGN KEY (category_id) REFERENCES Categories(id)
//         );

//         -- Inventory Table
//         CREATE TABLE IF NOT EXISTS Inventory (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             product_id INTEGER,
//             quantity INTEGER NOT NULL,
//             last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (product_id) REFERENCES Products(id)
//         );

//         -- Suppliers Table
//         CREATE TABLE IF NOT EXISTS Suppliers (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             contact_person TEXT,
//             phone TEXT,
//             email TEXT
//         );

//         -- Purchase_Orders Table
//         CREATE TABLE IF NOT EXISTS Purchase_Orders (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             supplier_id INTEGER,
//             order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
//             status TEXT,
//             FOREIGN KEY (supplier_id) REFERENCES Suppliers(id)
//         );

//         -- Purchase_Order_Items Table
//         CREATE TABLE IF NOT EXISTS Purchase_Order_Items (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             purchase_order_id INTEGER,
//             product_id INTEGER,
//             quantity INTEGER NOT NULL,
//             unit_price REAL NOT NULL,
//             FOREIGN KEY (purchase_order_id) REFERENCES Purchase_Orders(id),
//             FOREIGN KEY (product_id) REFERENCES Products(id)
//         );

//         -- Sales_Orders Table
//         CREATE TABLE IF NOT EXISTS Sales_Orders (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             customer_name TEXT NOT NULL,
//             order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
//             status TEXT
//         );

//         -- Sales_Order_Items Table
//         CREATE TABLE IF NOT EXISTS Sales_Order_Items (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             sales_order_id INTEGER,
//             product_id INTEGER,
//             quantity INTEGER NOT NULL,
//             unit_price REAL NOT NULL,
//             FOREIGN KEY (sales_order_id) REFERENCES Sales_Orders(id),
//             FOREIGN KEY (product_id) REFERENCES Products(id)
//         );

//     `);
//     console.log('Database initialized successfully');
//     return db;
//   } catch (error) {
//     console.error('Error initializing database:', error);
//     throw error;
//   }
// };

// export const getDatabase = async () => {
//   if (!dbInitPromise) {
//     dbInitPromise = initDatabase();
//   }
//   return dbInitPromise;
// };

// // Export initDatabase so it can be used in App.js
// export { initDatabase };
