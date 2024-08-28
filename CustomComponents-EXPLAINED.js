ProductCard.js

This component displays information about a single product.
It shows the product image, name, price, and stock quantity.
It has an edit button that can be pressed to edit the product details.
The entire card is touchable, allowing for navigation to a detailed view.

Usage:
jsxCopy<ProductCard 
  product={productData} 
  onPress={() => navigateToProductDetails(productData.id)} 
  onEdit={() => navigateToEditProduct(productData.id)} 
/>

QuantitySelector.js

This component allows users to increase or decrease a quantity.
It has "+" and "-" buttons, with the current quantity displayed in the middle.
It supports minimum and maximum values, disabling the buttons when these limits are reached.

Usage:
jsxCopy<QuantitySelector 
  quantity={productQuantity} 
  onIncrease={() => setProductQuantity(prev => prev + 1)} 
  onDecrease={() => setProductQuantity(prev => prev - 1)} 
  min={0} 
  max={100} 
/>

MetricsDisplay.js

This file exports two components: MetricCard and MetricsRow.
MetricCard displays a single metric with an icon, title, and value.
MetricsRow is a container for multiple MetricCard components, arranging them in a row.

Usage:
jsxCopy<MetricsRow 
  metrics={[
    { title: "Total Sales", value: "$1,234", icon: "cash-outline", color: "#4CAF50" },
    { title: "Products", value: "56", icon: "shirt-outline", color: "#2196F3" },
    { title: "Low Stock", value: "3", icon: "alert-circle-outline", color: "#FFC107" }
  ]} 
/>


To use these components in your app:

Make sure you have the necessary dependencies installed, particularly @expo/vector-icons for the icons used in these components.
Import and use these components in your screens as needed. For example, in your Inventory screen, you might use ProductCard in a FlatList to display all products.
In your Home screen, you could use MetricsRow to display key metrics at the top.
The QuantitySelector could be used in the Add Product screen or when recording a sale.
