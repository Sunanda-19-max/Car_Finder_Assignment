const CarCard = ({ car, wishlist, setWishlist }) => {
  const isInWishlist = wishlist.some((item) => item.id === car.id);

  const toggleWishlist = () => {
    let updatedWishlist;
    if (isInWishlist) {
      updatedWishlist = wishlist.filter((item) => item.id !== car.id);
    } else {
      updatedWishlist = [...wishlist, car];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <button onClick={toggleWishlist}>
        {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default CarCard;
