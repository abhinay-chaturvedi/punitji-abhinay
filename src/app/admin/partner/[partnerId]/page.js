// "use client";
import Profile from "@/app/partner/_components/Profile";
import Loader from "@/components/Loader";
import { getSession } from "@/lib/auth-service";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import React from "react";
import VerifyPartnerCard from "./VerifyPartnerCard";
import { revalidatePath } from "next/cache";
import db from "@/lib/db";
export const dynamic = 'force-dynamic'
const Page = async ({ params }) => {
  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }

  const partnerDetail = await db.partner.findUnique({
    where: {
      userId: params.partnerId,
    },
  });
  // const [partner, setPartner] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isVerifying, setIsVerifying] = useState(false);
  // const getPartnerById = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `/api/admin/partner/getAndUpdatePartner/?userId=${params.partnerId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Accepth: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const result = await res.json();
  //     if (result.status == 200) {
  //       setPartner(result.data);
  //     }
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log("🚀 ~ file: page.js:18 ~ getPartnerById ~ err:", err);
  //     setIsLoading(false);
  //   }
  // };

  // const verifyPartner = async () => {
  //   try {
  //     setIsVerifying(true);
  //     const res = await fetch("/api/admin/partner/getAndUpdatePartner", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({ userId: params.partnerId, isVerified: true }),
  //     });
  //     const result = await res.json();
  //     // console.log("🚀 ~ file: page.js:46 ~ verifyPartner ~ result:", result)
  //     if (result.status == 200) {
  //       setPartner(result.data);
  //     }
  //     setIsVerifying(false);
  //   } catch (err) {
  //     console.log("🚀 ~ file: page.js:38 ~ verifyPartner ~ err:", err);
  //     setIsVerifying(false);
  //   }
  // };

  // useEffect(() => {
  //   getPartnerById();
  // }, []);
  // if (isLoading) {
  //   return (
  //     <Box sx={{ width: "100%", height: "90vh" }}>
  //       <Loader />
  //     </Box>
  //   );
  // }
  // console.log(partner);
  console.log("----------------");
  const verifyPartner = async () => {
    "use server";
    try {
      await db.partner.update({
        where: {
          userId: params.partnerId,
        },
        data: {
          isVerified: true,
          joiningDate: new Date(),
        },
      });
      revalidatePath(`/admin/partner/${params.partnerId}`);
      return true;
    } catch (err) {
      return false;
    }
  };
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "700",
              marginY: "5px",
            }}
          >
            Partner Detail
          </Typography>
        </Box>
        <Profile
          session={session}
          userId={params.partnerId}
          partnerDetail={partnerDetail}
        />
        {!partnerDetail.isVerified && (
          <VerifyPartnerCard
            verifyPartner={verifyPartner}
            userId={params.partnerId}
          />
        )}
        {/* {partner && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Name : </Typography>
              <Typography>{partner.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Email : </Typography>
              <Typography>{partner.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Phone : </Typography>
              <Typography>{partner.phone}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Fax Number : </Typography>
              <Typography>{partner.faxNumber}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Address : </Typography>
              <Typography>{partner.address}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Deal In : </Typography>
              <Typography>{partner.dealIn}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Occupation : </Typography>
              <Typography>{partner.occupation}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Company : </Typography>
              <Typography>{partner.company}</Typography>
            </Box>
            <Divider sx={{ height: "5px", width: "100%" }} />
            {partner.isVerified ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Verification Status :{" "}
                  </Typography>
                  <Typography>Verified</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Cases Assigned :{" "}
                  </Typography>
                  <Typography>{partner.casesAssigned} </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Cases Solved :{" "}
                  </Typography>
                  <Typography>{partner.casesSolved} </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Joining Date :{" "}
                  </Typography>
                  <Typography>
                    {dayjs(partner.joiningDate).format("DD-MM-YYYY")}{" "}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Verification Status :{" "}
                </Typography>
                <Typography>Not Verified</Typography>
                <Button onClick={verifyPartner} disabled={isVerifying}>
                  {isVerifying ? "Please wait" : "verify"}
                </Button>
              </Box>
            )}
          </Box>
        )} */}
      </Container>
    </Box>
  );
};

export default Page;
