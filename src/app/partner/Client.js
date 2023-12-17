"use client";
import Loader from "@/components/Loader";
import { Box, Container, Typography, Divider, Button } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Steps from "./steps";
import LeftBar from "@/components/LeftBar";
import AssignDoc from "./AssignDoc";

const Client = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const getClientById = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/admin/client/getClientById?userId=${params.clientId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      console.log("🚀 ~ file: page.js:24 ~ getClientById ~ result:", result);
      if (result.status == 200) {
        setClient(result.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log("🚀 ~ file: page.js:24 ~ getClientById ~ err:", err);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getClientById();
  }, []);
  React.useEffect(() => {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    if (user) {
      setLoginUser(user);
    //   setIsLoading(false);
    } else {
      router.push("/login");
    }
  }, []);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "90vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }
  return (
    <Box>
      <Box>
        <Box sx={{padding: "10px"}}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "25px", textAlign: "center" }}
            >
              Client Info
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Name : </Typography>
              <Typography>{client.client.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Email : </Typography>
              <Typography>{client.client.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Phone : </Typography>
              <Typography>
                {client.client.phone ? client.client.phone : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Date Of Birth :{" "}
              </Typography>
              <Typography>
                {client.client.dob
                  ? dayjs(client.client.dob).format("DD-MM-YYYY")
                  : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Address : </Typography>
              <Typography>
                {client.client.address ? client.client.address : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Visa Country :{" "}
              </Typography>
              <Typography>
                {client.client.visaCountry ? client.client.visaCountry : "NA"}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ marginY: "10px" }} />
          <Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Education
              </Typography>
            </Box>
            {client.education?.map((item, index) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Degree :{" "}
                    </Typography>
                    <Typography>{item.degree}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      College :{" "}
                    </Typography>
                    <Typography>{item.college}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Country :{" "}
                    </Typography>
                    <Typography>{item.country}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Stream :{" "}
                    </Typography>
                    <Typography>{item.stream}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Score :{" "}
                    </Typography>
                    <Typography>{item.score}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Start Date :{" "}
                    </Typography>
                    <Typography>
                      {dayjs(item.startDate).format("DD-MM-YY")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      End Date :{" "}
                    </Typography>
                    <Typography>
                      {dayjs(item.endDate).format("DD-MM-YYYY")}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Divider sx={{ marginY: "10px" }} />
          <Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Work Experience
              </Typography>
            </Box>
            {client.workExperience?.map((item, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    mb: "4px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Company :{" "}
                    </Typography>
                    <Typography>{item.company}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Country :{" "}
                    </Typography>
                    <Typography>{item.country}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Job Title :{" "}
                    </Typography>
                    <Typography>{item.jobTitle}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Start Date :{" "}
                    </Typography>
                    <Typography>
                      {dayjs(item.startDate).format("DD-MM-YY")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      End Date :{" "}
                    </Typography>
                    <Typography>
                      {dayjs(item.endDate).format("DD-MM-YYYY")}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Divider sx={{ marginY: "10px" }} />
          <Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Language Test
              </Typography>
            </Box>
            {client.languageTest?.map((item, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    mb: "4px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>Exam : </Typography>
                    <Typography>{item.exam}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Listening Band :{" "}
                    </Typography>
                    <Typography>{item.listeningBand}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Reading Band :{" "}
                    </Typography>
                    <Typography>{item.readingBand}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Writing Band :{" "}
                    </Typography>
                    <Typography>{item.writingBand}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Speaking Band :{" "}
                    </Typography>
                    <Typography>{item.speakingBand}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Overall Band :{" "}
                    </Typography>
                    <Typography>{item.overallBand}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Divider sx={{ marginY: "10px" }} />
          <Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Process Status
              </Typography>
            </Box>
            <Steps client={client} />
          </Box>
          <AssignDoc client={client}/>
        </Box>
        </Box>
    </Box>
  );
};

export default Client;
