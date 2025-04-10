const CarFilter = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="car-filter">
      <select name="fuelType" onChange={handleFilterChange}>
        <option value="">Fuel Type</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
      </select>
      <select name="priceRange" onChange={handleFilterChange}>
        <option value="">Price Range</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default CarFilter;
