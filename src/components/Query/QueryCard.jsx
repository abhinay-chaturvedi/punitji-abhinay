import { Box, Divider, Typography } from "@mui/material";

const QueryCard = ({ item, index }) => {
  return (
    <Box sx={{ mt: "10px", mb: "5px" }}>
      <h3>{"Q-" + (index + 1) + ")  " + item.query}</h3>
      <Typography sx={{ ml: "45px" }}>
        {item.response
          ? item.response
          : "Not Answered! You will get the response very soon."}
      </Typography>
      <Divider />
    </Box>
  );
};
export default QueryCard;
