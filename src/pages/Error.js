const Error = ({ children }) => {
  return (
    <>
      <h1>ERROR! Seems something went wrong</h1>
      <div>
        <p>Soon we will fix it. Maybe. I guess...</p>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Error;
