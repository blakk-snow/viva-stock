-- Categories Table
CREATE TABLE Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT
);

-- Products Table (updated)
CREATE TABLE Products (
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
CREATE TABLE Sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATETIME NOT NULL,
    total_amount REAL NOT NULL
);

-- SaleItems Table
CREATE TABLE SaleItems (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sale_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES Sales(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

-- Backups Table
CREATE TABLE Backups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATETIME NOT NULL,
    file_name TEXT NOT NULL,
    status TEXT NOT NULL
);

-- Settings Table
CREATE TABLE Settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL UNIQUE,
    value TEXT
);
