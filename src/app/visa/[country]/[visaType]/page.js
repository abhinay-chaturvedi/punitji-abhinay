// const { Container } = require("@mui/material")
import { Box, Container, Typography } from "@mui/material";
import { australiaVisa, canadaVisa, germanyVisa, uaeVisa, ukVisa, usaVisa } from "./data";

const Page = ({ params }) => {
  console.log("🚀 ~ file: page.js:6 ~ Page ~ params:", params);
  if (params.country === "canada") {
    const canada = canadaVisa[params.visaType];
    if (canada) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{canada.title}</Typography>
              <Typography>{canada.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {canada.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else if (params.country === "australia") {
    const australia = australiaVisa[params.visaType];
    if (australia) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{australia.title}</Typography>
              <Typography>{australia.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {australia.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                      {item.subPoints?.map((subItem, ind) => {
                        return (
                          <Box sx={{ ml: "30px" }} key={index + ind}>
                            <Typography>
                              <b>
                                {ind + 1}- {subItem.title}{" "}
                              </b>
                              {subItem.desc}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else if (params.country === "germany") {
    const germany = germanyVisa[params.visaType];
    if (germany) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{germany.title}</Typography>
              <Typography>{germany.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {germany.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                      {item.subPoints?.map((subItem, ind) => {
                        return (
                          <Box sx={{ ml: "30px" }} key={index + ind}>
                            <Typography>
                              <b>
                                {ind + 1}- {subItem.title}{" "}
                              </b>
                              {subItem.desc}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else if (params.country === "usa") {
    const usa = usaVisa[params.visaType];
    if (usa) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{usa.title}</Typography>
              <Typography>{usa.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {usa.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                      {item.subPoints?.map((subItem, ind) => {
                        return (
                          <Box sx={{ ml: "30px" }} key={index + ind}>
                            <Typography>
                              <b>
                                {ind + 1}- {subItem.title}{" "}
                              </b>
                              {subItem.desc}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else if (params.country === "uk") {
    const uk = ukVisa[params.visaType];
    if (uk) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{uk.title}</Typography>
              <Typography>{uk.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {uk.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                      {item.subPoints?.map((subItem, ind) => {
                        return (
                          <Box sx={{ ml: "30px" }} key={index + ind}>
                            <Typography>
                              <b>
                                {ind + 1}- {subItem.title}{" "}
                              </b>
                              {subItem.desc}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else if (params.country === "uae") {
    const uae = uaeVisa[params.visaType];
    if (uae) {
      return (
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "5px",
              }}
            >
              <Typography>{uae.title}</Typography>
              <Typography>{uae.pointsTitle}</Typography>
              <Box sx={{ ml: "30px" }} component="ul">
                {uae.points.map((item, index) => {
                  return (
                    <Box component="li" key={index}>
                      <Typography>
                        <b>{item.title} </b>
                        {item.desc}
                      </Typography>
                      {item.subPoints?.map((subItem, ind) => {
                        return (
                          <Box sx={{ ml: "30px" }} key={index + ind}>
                            <Typography>
                              <b>
                                {ind + 1}- {subItem.title}{" "}
                              </b>
                              {subItem.desc}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>
        </Box>
      );
    }
  } else {
    return (
      <Box>
        <Container>Nothing here</Container>
      </Box>
    );
  }
};
export default Page;
