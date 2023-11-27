import Loader from "@/components/Loader";
import { UserContext } from "@/contexts/user/context";
import { getPartnerDetail } from "@/services/partner/profileDetail";
import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [partnerProfile, setPartnerProfile] = useState(null);
  console.log("🚀 ~ file: Profile.jsx:10 ~ Profile ~ partnerProfile:", partnerProfile)

  const {state: userState, dispatch: dispatchUserAction} = useContext(UserContext);
  const fetchPartnerProfile = async () => {
    console.log("calling partner api--------------------")
    try {
        const userId = userState.id;
        setIsLoading(true);
        const result = await getPartnerDetail(userId);
        console.log("🚀 ~ file: Profile.jsx:18 ~ fetchPartnerProfile ~ result:", result)
        if(result.status == 200) {
            setPartnerProfile(result.data);
        }
        setIsLoading(false);
    } catch(err) {
        console.log("🚀 ~ file: Profile.jsx:19 ~ fetchPartnerProfile ~ err:", err)
        setIsLoading(false);
    }
  }
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
    <Box>
      <Box>
        <Typography>Work and contact information</Typography>
      </Box>
      <Box>
        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
