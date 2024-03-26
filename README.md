# PATIKASTORE: React Native Product Listing App

## App Screenshot
![Screenshot of an App.](./FinalUI.png)

## Description
This project is a React Native application showcasing a product listing page with features like:
- Displaying product images, titles, and prices.
- Indicating in-stock status with a clear message ("STOKTA VAR" for in stock).
- Dynamic sizing based on device screen dimensions.

## Getting Started

### Prerequisites
- Node.js and npm (or yarn) installed on your system.
- A React Native development environment set up (follow official instructions from React Native Documentation).

### Clone the repository
```bash
git clone https://github.com/your-username/patika-store.git
cd patika-store
```

### Install dependencies
```bash
npm install
```

## Run the App 

### Android
```bash
npm run android
```

### IOS (Requires a Mac with Xcode)
```bash
npm run ios
```

## Project Structure
- ```App.js```: Main application component.
- ```components/```: Directory containing reusable components. 
    - ```ProductCard.js```: Component for displaying individual product information.
    - ```Product.style.js```: Styles for product cards.
- ```productDB/productDB.json```: Sample product data (replace with your actual data).

## Contribution
Feel free to fork the repository and contribute by adding new features, improving the design, or fixing bugs.