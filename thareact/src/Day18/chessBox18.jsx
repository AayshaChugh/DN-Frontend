const Box = ({ alter, i }) => {
  if (alter) {
    return (
      <div
        style={{
          backgroundColor: i % 2 === 0 ? "black" : "white",
          height: "20px",
          padding: "12px",
        }}
        className="chess18"
      ></div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: i % 2 === 0 ? "white" : "black",
          padding: "12px",
        }}
      ></div>
    );
  }
};
export default Box;
