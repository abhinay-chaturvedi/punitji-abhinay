"use client"
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
import React, { useContext, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BasicDatePicker from "@/components/Date";
import {
  getApplicationDetail,
  saveApplication,
} from "@/services/client/mainApplication";
import { useEffect } from "react";
import dayjs from "dayjs";
import { UserContext } from "@/contexts/user/context";
import Loader from "@/components/Loader";
import LoadingAnimation from "@/components/LoadingAnimation";
const DetailCard = ({ userId }) => {
  const [arrow, setArrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mainApplicationDetail, setMainApplicationDetail] = useState(null);
  const [mainDetail, setMainDetail] = useState({
    address: null,
    visaCountry: null,
  });
  const [dob, setDob] = useState(null);
  console.log("🚀 ~ DetailCard ~ dob:", dob)
  const [error, setError] = useState(null);
  const [btnText, setBtnText] = useState("save");
  // const [mainApplicationDetail, setMainApplicationDetail] = useState(null);

  const handleSave = async () => {
    try {
      const data = {
        dob,
        userId: userId,
        ...mainDetail,
      };
      console.log("data to save is", data);

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
      // console.log(
      //   "🚀 ~ file: MainApplication.jsx:23 ~ handleSave ~ result:",
      //   result
      // );
      if (result.status == 200) {
        setMainApplicationDetail(result.data);
        setBtnText("Saved!");
      } else {
        setBtnText("save");
        setError(result.message);
      }
    } catch (err) {
      console.log("🚀 ~ file: MainApplication.jsx:22 ~ handleSave ~ err:", err);
      setBtnText("save");
    }
  };
  const fetchApplicationDetail = async () => {
    try {
      // const userId = userState.id;
      const result = await getApplicationDetail(userId);
      // console.log(
      //   "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ result:",
      //   result
      // );
      if(result.status == 200) {
        setMainApplicationDetail(result.data);
        setMainDetail({
          visaCountry: result.data?.visaCountry,
          address: result.data?.address
        })
        setDob(result.data?.dob)
      }
      setIsLoading(false);
    } catch (err) {
      console.log(
        "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ err:",
        err
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchApplicationDetail();
  }, []);
  if (isLoading) {
    return (
      <Box sx={{ mt: "10px" }}>
        <Box
          sx={{
            p: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "2px 2px 5px 5px whitesmoke",
          }}
        >
          <LoadingAnimation />
        </Box>
      </Box>
    );
  }
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
        {arrow &&
          // (!mainApplicationDetail.visaCountry ? (
            <Grid container gap={2} justifyContent="center" sx={{ mt: "5px" }}>
              <Grid item xs={12} md={5.5}>
                <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-name">
                    Name
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
                    label="name"
                    name="name"
                    value={mainApplicationDetail?.name}
                    readOnly
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
                    value={mainApplicationDetail?.email}
                    readOnly
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
                <BasicDatePicker dob={dob} setDate={setDob} label="Date of Birth" />
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
          // ) : (
          //   <Box
          //     sx={{
          //       display: "flex",
          //       flexWrap: "wrap",
          //       gap: "10px",
          //       flexDirection: "column",
          //     }}
          //   >
          //     <Box sx={{ display: "flex", gap: "10px" }}>
          //       <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
          //       <Typography>{mainApplicationDetail.name}</Typography>
          //     </Box>
          //     <Box sx={{ display: "flex", gap: "10px" }}>
          //       <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
          //       <Typography>{mainApplicationDetail.email}</Typography>
          //     </Box>
          //     <Box sx={{ display: "flex", gap: "10px" }}>
          //       <Typography sx={{ fontWeight: "bold" }}>Address:</Typography>
          //       <Typography>{mainApplicationDetail.address}</Typography>
          //     </Box>
          //     <Box sx={{ display: "flex", gap: "10px" }}>
          //       <Typography sx={{ fontWeight: "bold" }}>
          //         Date of Birth:
          //       </Typography>
          //       <Typography>
          //         {dayjs(mainApplicationDetail.dob).format("YYYY-MM-DD")}
          //       </Typography>
          //     </Box>
          //     <Box sx={{ display: "flex", gap: "10px" }}>
          //       <Typography sx={{ fontWeight: "bold" }}>
          //         Visa Country:
          //       </Typography>
          //       <Typography>{mainApplicationDetail.visaCountry}</Typography>
          //     </Box>
          //   </Box>
          // ))
        }
      </Box>
    </Box>
  );
};

export default DetailCard;
