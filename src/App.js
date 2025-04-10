import logo from './logo.svg';
import './App.css';
import ContinentalGT from './images/Continental GT.jpg';
import Ferrari488 from './images/488 GTB.jpg';
import CivicTypeR from './images/Civic Type R.jpg';
import Bentayga from './images/Bentayga.jpg';
import F8Tributo from './images/F8 Tributo.jpg';
import Insight from './images/Insight.jpg';
import FlyingSpur from './images/Flying Spur.jpg';
import SF90Stradale from './images/SF90 Stradale.jpg';
import CRV from './images/CR-V.jpg';
import Mulsanne from './images/Mulsanne.jpg';
import PortofinoM from './images/Portofino M.jpg';
import React, { useState, useEffect } from 'react';
import CarSearch from './components/CarSearch'; 
import CarFilter from './components/CarFilter'; 
import CarCard from './components/CarCard'; 
import Pagination from './components/Pagination';
import Wishlist from './components/Wishlist'; 

function App() {
  const carData = [
  { id: 1, name: 'Continental GT', brand: 'Bentley', price: 231800, fuel: 'Petrol', seats: 4, img: ContinentalGT },
  { id: 2, name: '488 GTB', brand: 'Ferrari', price: 330000, fuel: 'Diesel', seats: 2, img: Ferrari488 },
  { id: 3, name: 'Civic Type R', brand: 'Honda', price: 40000, fuel: 'Petrol', seats: 5, img: CivicTypeR },
  { id: 4, name: 'Bentayga', brand: 'Bentley', price: 180800, fuel: 'Diesel', seats: 5, img: Bentayga },
  { id: 5, name: 'F8 Tributo', brand: 'Ferrari', price: 280000, fuel: 'Petrol', seats: 2, img: F8Tributo },
  { id: 6, name: 'Insight', brand: 'Honda', price: 23000, fuel: 'Electric', seats: 5, img: Insight },
  { id: 7, name: 'Flying Spur', brand: 'Bentley', price: 232800, fuel: 'Electric', seats: 5, img: FlyingSpur },
  { id: 8, name: 'SF90 Stradale', brand: 'Ferrari', price: 625000, fuel: 'Electric', seats: 2, img: SF90Stradale },
  { id: 9, name: 'CR-V', brand: 'Honda', price: 30000, fuel: 'Electric', seats: 5, img: CRV },
  { id: 10, name: 'Mulsanne', brand: 'Bentley', price: 305800, fuel: 'Petrol', seats: 4, img: Mulsanne },
  { id: 11, name: 'Portofino M', brand: 'Ferrari', price: 215000, fuel: 'Petrol', seats: 2, img: PortofinoM },
];

  const [cars, setCars] = useState(carData);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000000]);
  const [fuelTypeFilter, setFuelTypeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (brandFilter ? car.brand === brandFilter : true) &&
      car.price >= priceRangeFilter[0] &&
      car.price <= priceRangeFilter[1] &&
      (fuelTypeFilter ? car.fuel === fuelTypeFilter : true)
    );
  });
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const toggleWishlist = (car) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === car.id)) {
        return prev.filter((item) => item.id !== car.id);
      } else {
        return [...prev, car];
      }
    });
  };
  return (
    <div className="container">
      <h2>Car Search and Wishlist</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <br />
        <br />
      </div>
      <div className="filters-container mb-6">
        <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Bentley">Bentley</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Honda">Honda</option>
        </select>
        <input
          type="range"
          min="0"
          max="1000000"
          value={priceRangeFilter[1]}
          onChange={(e) => setPriceRangeFilter([0, e.target.value])}
        />
        <span>Price Range: ${priceRangeFilter[1]}</span>
        <select value={fuelTypeFilter} onChange={(e) => setFuelTypeFilter(e.target.value)}>
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
      <div>
        {filteredCars.length === 0 && <p>No cars found for the selected filters.</p>}
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Fuel</th>
              <th>Seats</th>
              <th>Wishlist</th>
            </tr>
          </thead>
          <tbody>
            {currentCars.map((car) => (
              <tr key={car.id}>
                <td><img src={car.img} alt={car.name} className="car-image"/></td>
                <td>{car.name}</td>
                <td>{car.brand}</td>
                <td>${car.price}</td>
                <td>{car.fuel}</td>
                <td>{car.seats}</td>
                <td>
                  <button
                    onClick={() => toggleWishlist(car)}
                    className={wishlist.some((item) => item.id === car.id) ? 'remove' : 'add'}
                  >
                    {wishlist.some((item) => item.id === car.id) ? 'Remove' : 'Add'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
