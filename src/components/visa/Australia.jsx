import React from "react";


const Australia = () => {
  return (
    <Box>
      <Box></Box>
    </Box>
  );
};
const Visa = (props) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <Box sx={{mt: "10px"}}>
      <Box sx={{ display: "flex", bgcolor: "whitesmoke", p: "3px 8px",alignItems: "center",borderRadius: "4px", justifyContent: "space-between" }}>
        <Typography sx={{fontWeight: "bold"}}>{"props.visa"}</Typography>
        <IconButton onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen?<AddIcon />: <RemoveIcon/>}
        </IconButton>
      </Box>
      {isOpen && <Box sx={{display: "flex", flexDirection: "column", gap: "10px", mt: "5px"}}>
        <Typography>{"props.title"}</Typography>
        <Typography>{"props.pointsTitle"}</Typography>
        <Box sx={{ml: "30px"}} component="ul">
              <Box component="li" key={index}>
                <Typography>
                  <b>{"item.title"} </b>{"item.desc"} 
                </Typography>
              </Box>
        </Box>
      </Box>}
    </Box>
  );
};
export default Australia;
