import CustomInput from "@/components/CustomInput";
import Loader from "@/components/Loader";
import { UserContext } from "@/contexts/user/context";
import {
  getPartnerDetail,
  updatePartnerDetail,
} from "@/services/partner/profileDetail";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [partnerProfile, setPartnerProfile] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("software company");
  const [dealIn, setDealIn] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [location, setLocation] = useState("");
  const [btnText, setBtnText] = useState("save");
  console.log(
    "🚀 ~ file: Profile.jsx:10 ~ Profile ~ partnerProfile:",
    partnerProfile
  );

  const { state: userState, dispatch: dispatchUserAction } =
    useContext(UserContext);
  const handleSave = async () => {
    try {
      const userId = userState.id;
      if (!dealIn || dealIn.length <= 0) {
        return setError("Please fill deal in");
      }
      if (!phone || phone.length <= 0) {
        return setError("Please fill phone");
      }
      if (!occupation || phone.occupation <= 0) {
        return setError("Please fill occupation");
      }
      if (!faxNumber || phone.faxNumber <= 0) {
        return setError("Please fill faxNumber");
      }
      if (!location || phone.location <= 0) {
        return setError("Please fill location");
      }
      const data = {
        userId,
        company,
        phone,
        dealIn,
        occupation,
        faxNumber,
        address: location,
      };
      setBtnText("saving");
      const result = await updatePartnerDetail(data);
      console.log("🚀 ~ file: Profile.jsx:29 ~ handleSave ~ result:", result);
      if (result.status == 200) {
        setPartnerProfile(result.data);
      }
      setBtnText("save");
    } catch (err) {
      console.log("🚀 ~ file: Profile.jsx:30 ~ handleSave ~ err:", err);
    }
  };
  const fetchPartnerProfile = async () => {
    console.log("calling partner api--------------------");
    try {
      const userId = userState.id;
      setIsLoading(true);
      const result = await getPartnerDetail(userId);
      console.log(
        "🚀 ~ file: Profile.jsx:18 ~ fetchPartnerProfile ~ result:",
        result
      );
      if (result.status == 200) {
        setPartnerProfile(result.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(
        "🚀 ~ file: Profile.jsx:19 ~ fetchPartnerProfile ~ err:",
        err
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPartnerProfile();
  }, [userState]);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%", height: "80vh" }}>
        <Loader />
      </Box>
    );
  }
  return (
    <Box sx={{ marginY: 3 }}>
      <Box>
        <Typography
          sx={{ fontWeight: "900", textAlign: "center", fontSize: "20px" }}
        >
          Work and contact information
        </Typography>
      </Box>
      {error && (
        <Alert
          sx={{ width: "100%", my: 1 }}
          severity="error"
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.company ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Company</Typography>
              <Typography>{partnerProfile?.company}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="company"
                setInput={(e) => setCompany(e.target.value)}
                label="Company"
                value={company}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box sx={{ padding: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
            <Typography>{partnerProfile?.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.dealIn ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Deal In</Typography>
              <Typography>{partnerProfile?.dealIn}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="dealIn"
                setInput={(e) => setDealIn(e.target.value)}
                label="Deal In"
                value={dealIn}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.dealIn ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Phone </Typography>
              <Typography>{partnerProfile?.phone}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="phone"
                setInput={(e) => setPhone(e.target.value)}
                label="Phone"
                value={phone}
                type="number"
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.occupation ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Occupation</Typography>
              <Typography>{partnerProfile?.occupation}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="occupation"
                setInput={(e) => setOccupation(e.target.value)}
                label="Occupation"
                value={occupation}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.faxNumber ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Fax Number</Typography>
              <Typography>{partnerProfile?.faxNumber}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="faxNumber"
                setInput={(e) => setFaxNumber(e.target.value)}
                label="Fax Number"
                value={faxNumber}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.address ? (
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Location</Typography>
              <Typography>{partnerProfile?.address}</Typography>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="location"
                setInput={(e) => setLocation(e.target.value)}
                label="Location"
                value={location}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box sx={{ padding: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
            <Typography>
              {partnerProfile?.isVerified === true
                ? "Verified"
                : "Verification pending. Kindly complete all details and ensure they are saved. If already filled, wait for verification."}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box sx={{ padding: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Joining Date</Typography>
            <Typography>
              {partnerProfile?.isVerified === true
                ? dayjs(partnerProfile.joiningDate).format("DD/MM/YYYY")
                : "NA"}
            </Typography>
          </Box>
        </Grid>
        {partnerProfile?.isVerified && (
          <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Cases solved</Typography>
              <Typography>{partnerProfile?.casesSolved}</Typography>
            </Box>
          </Grid>
        )}
        {partnerProfile?.isVerified && (
          <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ padding: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Cases Assigned
              </Typography>
              <Typography>{partnerProfile?.casesAssigned}</Typography>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} display="flex" justifyContent="center">
          {!partnerProfile?.phone && (
            <Button onClick={handleSave} disabled={btnText !== "save"}>
              {btnText}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
