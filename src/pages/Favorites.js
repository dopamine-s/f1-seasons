const Favorites = ({ children }) => {
  return (
    <>
      <h1>Favorite drivers</h1>
      <div>
        <p>You can trust us your preferencies</p>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Favorites;
