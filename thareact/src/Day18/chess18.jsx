import "./chess18.css";
import Box from "./chessBox18";

const chess18 = () => {
  let alter = true;
  return (
    <>
      <div id="chesskiid">
        {[...Array(64)].map((box, i) => {
          if (i % 8 === 0 && i !== 0) {
            alter = !alter;
          }
          return <Box i={i} alter={alter} />;
        })}
      </div>
    </>
  );
};

export default chess18;
