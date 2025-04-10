const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
