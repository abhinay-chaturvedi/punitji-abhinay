import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BasicDatePicker from "@/components/Date";
import {
  getApplicationDetail,
  saveApplication,
} from "@/services/user/mainApplication";
import { useEffect } from "react";
import dayjs from "dayjs";
const DetailCard = () => {
  const [arrow, setArrow] = useState(false);
  const [mainDetail, setMainDetail] = useState({
    name: null,
    email: null,
    address: null,
    visaCountry: null,
  });
  const [dob, setDob] = useState(null);
  const [error, setError] = useState(null);
  const [btnText, setBtnText] = useState("save");
  const [mainApplicationDetail, setMainApplicationDetail] = useState(null);
  const handleSave = async () => {
    try {
      const data = {
        dob,
        userId: "8ddda531-e273-49ac-b24c-410d04efb7e9",
        ...mainDetail,
      };
      console.log("data to save is", data);
      if (!data.name) {
        setError("Please fill name!");
        return;
      }
      if (!data.email) {
        setError("Please fill email!");
        return;
      }
      if (!data.address) {
        setError("Please fill address!");
        return;
      }
      if (!data.dob) {
        setError("Please fill date of birth!");
        return;
      }
      if (!data.visaCountry) {
        setError("Please fill visa country!");
        return;
      }
      setBtnText("saving...");
      const result = await saveApplication(data);
      console.log(
        "🚀 ~ file: MainApplication.jsx:23 ~ handleSave ~ result:",
        result
      );
      setBtnText("Data Successfully Saved!");
    } catch (err) {
      console.log("🚀 ~ file: MainApplication.jsx:22 ~ handleSave ~ err:", err);
      setBtnText("save");
    }
  };
  const fetchApplicationDetail = async () => {
    try {
      const userId = "8ddda531-e273-49ac-b24c-410d04efb7e9";
      const result = await getApplicationDetail(userId);
      console.log(
        "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ result:",
        result
      );
      setMainApplicationDetail(result.data);
    } catch (err) {
      console.log(
        "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ err:",
        err
      );
    }
  };
  useEffect(() => {
    fetchApplicationDetail();
  }, []);
  return (
    <Box sx={{ mt: "10px" }}>
      <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Main Application</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        {arrow && error && (
          <Alert
            sx={{ width: "100%", my: 1 }}
            severity="error"
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        )}
        {arrow && (!mainApplicationDetail?(
          <Grid container gap={2} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={12} md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  onChange={(e) => {
                    // setName(e.target.value)
                    // setError(null);
                    console.log("onchange");
                    setMainDetail((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    setError(null);
                  }}
                  type="text"
                  label="name"
                  name="name"
                  value={mainDetail.name}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} item md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  onChange={(e) => {
                    // setName(e.target.value)
                    // setError(null);
                    setMainDetail((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    setError(null);
                  }}
                  type="email"
                  label="email"
                  name="email"
                  value={mainDetail.email}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} item md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-address">
                  Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-address"
                  onChange={(e) => {
                    // setName(e.target.value)
                    // setError(null);
                    console.log("onchange");
                    setMainDetail((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    setError(null);
                  }}
                  type="text"
                  label="address"
                  name="address"
                  value={mainDetail.address}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} item md={5.5}>
              <BasicDatePicker setDate={setDob} label="Date of Birth" />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-name">
                  Visa Country
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  onChange={(e) => {
                    // setName(e.target.value)
                    // setError(null);
                    console.log("onchange");
                    setMainDetail((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    setError(null);
                  }}
                  type="text"
                  label="Visa Country"
                  name="visaCountry"
                  value={mainDetail.visaCountry}
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button onClick={handleSave} disabled={btnText != "save"}>
                {btnText}
              </Button>
            </Grid>
          </Grid>
        ):(
            <Box sx={{display: "flex", flexWrap: "wrap", gap: "10px", flexDirection: "column"}}>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <Typography sx={{fontWeight: "bold"}}>Name:</Typography>
                    <Typography>{mainApplicationDetail.name}</Typography>
                </Box>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <Typography sx={{fontWeight: "bold"}}>Email:</Typography>
                    <Typography>{mainApplicationDetail.email}</Typography>
                </Box>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <Typography sx={{fontWeight: "bold"}}>Address:</Typography>
                    <Typography>{mainApplicationDetail.address}</Typography>
                </Box>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <Typography sx={{fontWeight: "bold"}}>Date of Birth:</Typography>
                    <Typography>{dayjs(mainApplicationDetail.dob).format("YYYY-MM-DD")}</Typography>
                </Box>
                <Box sx={{display: "flex", gap: "10px"}}>
                    <Typography sx={{fontWeight: "bold"}}>Visa Country:</Typography>
                    <Typography>{mainApplicationDetail.visaCountry}</Typography>
                </Box>
            </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DetailCard;
