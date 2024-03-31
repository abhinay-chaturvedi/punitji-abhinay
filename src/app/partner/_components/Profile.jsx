// "use client"
import CustomInput from "@/components/CustomInput";
import Loader from "@/components/Loader";
import { UserContext } from "@/contexts/user/context";
import {
  getPartnerDetail,
  updatePartnerDetail,
} from "@/services/partner/profileDetail";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { toast } from "sonner";
import UpdateCard from "./UpdateCard";
import StaticCard from "./StaticCard";

const Profile = ({userId, partnerDetail, session}) => {
  console.log("here i am in profile")
  // const [isLoading, setIsLoading] = useState(false);
  // const [partnerProfile, setPartnerProfile] = useState(null);
  // const [error, setError] = useState(null);
  // const [email, setEmail] = useState("");
  // const [company, setCompany] = useState("");
  // const [dealIn, setDealIn] = useState("");
  // const [phone, setPhone] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [faxNumber, setFaxNumber] = useState("");
  // const [location, setLocation] = useState("");
  // const [btnText, setBtnText] = useState("save");
  // console.log(
  //   "🚀 ~ file: Profile.jsx:10 ~ Profile ~ partnerProfile:",
  //   partnerProfile
  // );

  // const { state: userState, dispatch: dispatchUserAction } =
  //   useContext(UserContext);
  // const handleSave = async () => {
  //   try {
  //     const userId = userState.id;
  //     if (!dealIn || dealIn.length <= 0) {
  //       return setError("Please fill deal in");
  //     }
  //     if (!phone || phone.length <= 0) {
  //       return setError("Please fill phone");
  //     }
  //     if (!occupation || phone.occupation <= 0) {
  //       return setError("Please fill occupation");
  //     }
  //     if (!faxNumber || phone.faxNumber <= 0) {
  //       return setError("Please fill faxNumber");
  //     }
  //     if (!location || phone.location <= 0) {
  //       return setError("Please fill location");
  //     }
  //     const data = {
  //       userId,
  //       company,
  //       phone,
  //       dealIn,
  //       occupation,
  //       faxNumber,
  //       address: location,
  //     };
  //     setBtnText("saving");
  //     const result = await updatePartnerDetail(data);
  //     console.log("🚀 ~ file: Profile.jsx:29 ~ handleSave ~ result:", result);
  //     if (result.status == 200) {
  //       setPartnerProfile(result.data);
  //       toast.success("Successfully saved!")
  //     }
  //     setBtnText("save");
  //   } catch (err) {
  //     console.log("🚀 ~ file: Profile.jsx:30 ~ handleSave ~ err:", err);
  //   }
  // };
  // const fetchPartnerProfile = async () => {
  //   try {
  //     const userId = userState.id;
  //     setIsLoading(true);
  //     const result = await getPartnerDetail(userId);
  //     if (result.status == 200) {
  //       setPartnerProfile(result.data);
  //     }
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(
  //       "🚀 ~ file: Profile.jsx:19 ~ fetchPartnerProfile ~ err:",
  //       err
  //     );
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchPartnerProfile();
  // }, [userState]);

  // if (isLoading) {
  //   return (
  //     <Box sx={{ width: "100%", height: "80vh" }}>
  //       <Loader />
  //     </Box>
  //   );
  // }
  return (
    <Box sx={{ marginY: 2 }}>
      <Box>
        <Typography
          sx={{ fontWeight: "900",mb: "5px", textAlign: "center", fontSize: "20px" }}
        >
          Work and contact information
        </Typography>
      </Box>
      <Box sx={{display: {md: "flex", flexWrap: "wrap"}, gap: "5px"}}>
        <UpdateCard session={session} userId={userId} name={"company"} title={"Company"} value={partnerDetail.company}/>
        <UpdateCard session={session} userId={userId} name={"email"} title={"Email"} value={partnerDetail.email}/>
        <UpdateCard session={session} userId={userId} name={"dealIn"} title={"Deal in"} value={partnerDetail.dealIn}/>
        <UpdateCard session={session} userId={userId} name={"phone"} title={"Phone"} value={partnerDetail.phone}/>
        <UpdateCard session={session} userId={userId} name={"occupation"} title={"Occupation"} value={partnerDetail.occupation}/>
        <UpdateCard session={session} userId={userId} name={"faxNumber"} title={"Fax Number"} value={partnerDetail.faxNumber}/>
        <UpdateCard session={session} userId={userId} name={"address"} title={"Address"} value={partnerDetail.address}/>
        <StaticCard session={session} name={"isVerified"} title={"Status"} value={partnerDetail.isVerified}/>
        <StaticCard session={session} name={"casesSolved"} title={"Cases Solved"} value={partnerDetail.casesSolved}/>
        <StaticCard session={session} name={"casesAssigned"} title={"Cases Assigned"} value={partnerDetail.casesAssigned}/>
        <StaticCard session={session} name={"joiningDate"} title={"Joining Date"} value={!partnerDetail.joiningDate? "NA": dayjs(partnerDetail.joiningDate).format("YYYY-MM-DD")}/>
        {/* <StaticCard name={"joiningDate"} title={"Joining Date"} value={dayjs(partnerDetail.joiningDate).format("YYYY-MM-DD")}/> */}
      </Box>
      {/* {error && (
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
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="company"
                setInput={(e) => setCompany(e.target.value)}
                label="Company"
                // value={company}
                value={partnerProfile?.company? partnerProfile?.company: company}
                defaultValue={partnerProfile?.company}
                readOnly={partnerProfile?.company}
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          {partnerProfile?.email  && <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="Email"
                setInput={(e) => setCompany(e.target.value)}
                label="Email"
                value={partnerProfile.email}
                readOnly
              />
            </Box>}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="dealIn"
                setInput={(e) => setDealIn(e.target.value)}
                label="Deal In"
                value={partnerProfile?.dealIn? partnerProfile?.dealIn: dealIn}
                readOnly={partnerProfile?.dealIn}
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="phone"
                setInput={(e) => setPhone(e.target.value)}
                label="Phone"
                // value={phone}
                value={partnerProfile?.phone? partnerProfile?.phone: phone}
                type="number"
                readOnly={partnerProfile?.phone}
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="occupation"
                setInput={(e) => setOccupation(e.target.value)}
                label="Occupation"
                // value={occupation}
                value={partnerProfile?.occupation? partnerProfile?.occupation: occupation}
                defaultValue={partnerProfile?.occupation}
                readOnly={partnerProfile?.occupation}
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="faxNumber"
                setInput={(e) => setFaxNumber(e.target.value)}
                label="Fax Number"
                // value={faxNumber}
                value={partnerProfile?.faxNumber? partnerProfile?.faxNumber: faxNumber}
                readOnly={partnerProfile?.faxNumber}
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          
            <Box sx={{ padding: "10px" }}>
              <CustomInput
                name="location"
                setInput={(e) => setLocation(e.target.value)}
                label="Location"
                // value={location}
                value={partnerProfile?.address? partnerProfile?.address: location}
                readOnly={partnerProfile?.address}
              />
            </Box>
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
      </Grid> */}
    </Box>
  );
};
export default Profile;
