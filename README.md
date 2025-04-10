Car Search and Wishlist App

This is a simple React-based web application that allows users to search for cars, apply filters (brand, price range, and fuel type), and manage a wishlist of selected cars. The car data is displayed in a table, and users can toggle the wishlist status of each car.

**Features**
- **Car Search**: Search for cars by name.
- **Filters**: Filter cars by:
  - Brand (Bentley, Ferrari, Honda)
  - Price range (from $0 to $1,000,000)
  - Fuel type (Petrol, Diesel, Electric)
- **Wishlist**: Add or remove cars from a wishlist. The wishlist is saved in `localStorage`, so it persists between page reloads.
- **Pagination**: Navigate through a paginated list of cars (10 cars per page).
- **Responsive Design**: The app is responsive and adjusts to different screen sizes.

**Tech Stack**
- **Frontend**: React.js
- **Styling**: Custom CSS
- **State Management**: React's `useState` and `useEffect` hooks
- **Persistence**: `localStorage` for saving the wishlist

**Getting Started**

To get this app up and running locally, follow these steps:

**Prerequisites**
Make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager) or **yarn**

**Installation**

1. Clone the repository:
   git clone https://github.com/Sunanda-19-max/Car_Finder_Assignment.git
  

2. Navigate to the project directory:
   cd car-finder

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

   This will start the app on [http://localhost:3000](http://localhost:3000).

**Code Overview**

- **App.js**: The main component that manages the car data, filters, and wishlist functionality. It renders the entire app.
- **CarSearch Component**: Allows users to search for cars by name.
- **CarFilter Component**: Provides UI for filtering cars by brand, price, and fuel type.
- **CarCard Component**: Represents a single car in the list.
- **Pagination Component**: Allows users to navigate between pages of cars.
- **Wishlist Component**: Displays the cars in the user's wishlist.

**Usage**

1. **Search for Cars**: Type a car name in the search bar to filter the car list based on the name.
2. **Apply Filters**: Use the dropdowns and sliders to filter cars by brand, price, and fuel type.
3. **Manage Wishlist**: Click the "Add" button to add a car to your wishlist. If the car is already in the wishlist, the button will change to "Remove," allowing you to remove the car.
4. **Pagination**: Use the pagination controls at the bottom to navigate between pages of cars.

**LocalStorage**
The app uses `localStorage` to store the wishlist. This means that even if you refresh the page, the cars you added to your wishlist will remain saved.

**Contributing**

Contributions are welcome! If you'd like to improve this project or report a bug, please fork the repository, make your changes, and submit a pull request.

**License**

This project is open-source and available under the [MIT License](LICENSE).

**Acknowledgements**

- The car images used in this app are for demonstration purposes only.
