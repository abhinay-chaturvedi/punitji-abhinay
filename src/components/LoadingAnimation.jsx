import { Box } from "@mui/material";

const animation = {
  "@keyframes jump": {
    "0%": {
      transform: "translate3d(0, 0,0)",
    },
    "50%": {
      transform: "translate3d(0, 15px, 0)",
    },
    "100%:": {
      transform: "translate3d(0, 0,0);",
    },
  },
};

const LoadingAnimation = () => {
  return (
    <Box sx={animation}>
      <Box
        sx={{
          display: "inline-block",
          m: "2px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#4b9cdb",
        }}
        style={{ animation: "jump 0.6s 0.1s ease-in infinite" }}
      ></Box>
      <Box
        sx={{
          display: "inline-block",
          m: "2px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#4b9cdb",
        }}
        style={{ animation: "jump 0.6s 0.2s ease-in infinite" }}
      ></Box>
      <Box
        sx={{
          display: "inline-block",
          m: "2px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#4b9cdb",
        }}
        style={{ animation: "jump 0.6s 0.3s ease-in infinite" }}
      ></Box>
    </Box>
  );
};
export default LoadingAnimation;
