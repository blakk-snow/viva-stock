# Fashion Shop Stock Management System - User Flow

1. **App Launch and Authentication**
   - User opens the app
   - If first time:
     - User sees a welcome screen
     - User sets up their account (shop name, owner details, etc.)
   - If returning:
     - User logs in (optional, depending on your security requirements)

2. **Home Screen / Dashboard**
   - User sees key metrics:
     - Total inventory value
     - Number of products
     - Low stock alerts
     - Recent sales summary
   - Quick action buttons:
     - Add new product
     - Record sale
     - View inventory

3. **Inventory Management**
   - User navigates to the Inventory screen
   - User can:
     - View all products (using ProductCard components)
     - Search for specific products
     - Filter products by category
     - Sort products (by name, price, quantity)
   - Add a new product:
     - User taps "Add New Product"
     - Fills in product details (name, category, price, quantity, etc.)
     - Optionally adds a product image
     - Saves the new product
   - Edit an existing product:
     - User taps on a product card
     - Modifies product details
     - Saves changes

4. **Sales Recording**
   - User navigates to the Sales screen
   - User can:
     - View recent sales
     - Record a new sale:
       - Select products sold (using ProductCard components)
       - Specify quantities (using QuantitySelector component)
       - Add customer details (optional)
       - Complete the sale
   - After a sale is recorded:
     - Inventory is automatically updated
     - Sales metrics on the dashboard are updated

5. **Reporting**
   - User navigates to the Reports screen
   - User can view various reports:
     - Sales over time (daily, weekly, monthly)
     - Best-selling products
     - Inventory valuation
     - Low stock items

6. **Stock Management**
   - User receives low stock alerts on the dashboard
   - User can initiate restocking:
     - Navigate to low stock products
     - Update quantities
     - Optionally record purchase orders or supplier details

7. **Settings and Customization**
   - User can access the Settings screen
   - Options to:
     - Update shop details
     - Customize app appearance
     - Set low stock thresholds
     - Manage categories

8. **Data Backup and Sync**
   - Automatic local data saving (using AsyncStorage)
   - Option to backup data to Google Drive:
     - User initiates backup from Settings
     - App authenticates with Google Drive
     - Data is securely uploaded

9. **Logout / App Exit**
   - User can logout (if authentication is implemented)
   - App saves state and data before closing