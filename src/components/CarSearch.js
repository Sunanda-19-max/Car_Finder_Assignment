const CarSearch = ({ setFilters }) => {
  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, brand: e.target.value }));
  };

  return (
    <div className="car-search">
      <input
        type="text"
        placeholder="Search by brand"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default CarSearch;
