# Fashion Shop Stock Management System - Screen Overview

## 1. Home Screen
**Functionality:** Dashboard view of key metrics and quick access to main features
**Features:**
- Display summary of current inventory
- Show recent sales
- Quick access buttons to key functions

**Components:**
- Container
- Header
- Button (for quick access)
- Custom components for metrics display

## 2. Inventory Screen
**Functionality:** Manage and view all product inventory
**Features:**
- List all products with key info (name, quantity, price)
- Search and filter products
- Sort products by different criteria
- Add new product button

**Components:**
- Container
- Header
- Navbar
- Textbox (for search)
- CustomPicker (for filter/sort)
- Button (for add new product)
- Custom ProductList component

## 3. Add Product Screen
**Functionality:** Add a new product to inventory
**Features:**
- Form to input product details
- Image upload option
- Save and cancel buttons

**Components:**
- Container
- Header
- Textbox (for product details)
- CustomPicker (for category, size, etc.)
- Button (for save and cancel)
- Custom ImagePicker component

## 4. Edit Product Screen
**Functionality:** Modify existing product details
**Features:**
- Pre-filled form with current product details
- Update image option
- Save, delete, and cancel buttons

**Components:**
- Container
- Header
- Textbox (for product details)
- CustomPicker (for category, size, etc.)
- Button (for save, delete, and cancel)
- Custom ImagePicker component

## 5. Product Details Screen
**Functionality:** View detailed information about a specific product
**Features:**
- Display all product information
- Show stock history
- Edit and delete options

**Components:**
- Container
- Header
- Custom components for product display
- Button (for edit and delete)

## 6. Sales Screen
**Functionality:** Record new sales and view sales history
**Features:**
- Form to add new sale
- List of recent sales
- Search and filter sales

**Components:**
- Container
- Header
- Navbar
- Textbox (for search)
- CustomPicker (for filter)
- Button (for add new sale)
- Custom SalesList component

## 7. Add Sale Screen
**Functionality:** Record a new sale
**Features:**
- Product selection (multiple)
- Quantity input
- Automatic total calculation
- Date and time input

**Components:**
- Container
- Header
- CustomPicker (for product selection)
- Textbox (for quantity)
- Button (for add more products, save)

## 8. Reports Screen
**Functionality:** Generate and view various reports
**Features:**
- Select report type
- Set date range
- Display report data
- Export option

**Components:**
- Container
- Header
- CustomPicker (for report type, date range)
- Button (for generate, export)
- Custom chart components

## 9. Low Stock Alert Screen
**Functionality:** View products that are low in stock
**Features:**
- List of products below reorder point
- Quick reorder option

**Components:**
- Container
- Header
- Custom LowStockList component
- Button (for quick reorder)

## 10. Settings Screen
**Functionality:** Manage app settings and user preferences
**Features:**
- User profile management
- App preferences
- Data backup and restore options
- Notification settings

**Components:**
- Container
- Header
- Textbox (for user details)
- CustomPicker (for preferences)
- Button (for save, backup, restore)

## 11. Backup Screen
**Functionality:** Manage data backup to Google Drive
**Features:**
- Initiate backup
- View backup history
- Restore from backup

**Components:**
- Container
- Header
- Button (for backup, restore)
- Custom BackupHistoryList component
