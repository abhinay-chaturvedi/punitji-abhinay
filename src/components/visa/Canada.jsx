"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { canadaVisaList } from "../HomePage/WhatWeOffer/data";
import Link from "next/link";
// const visas = [
//   {
//     visa: "Express Entry",
//     id: "ea9b8535-4ba4-4aa8-a8e7-d1c0b171101b",
//     title:
//       "The Canada Express Entry system is an immigration management system introduced by the Canadian government to facilitate the selection and processing of skilled immigrants who wish to become permanent residents of Canada. It's a points-based system designed to assess and rank candidates based on various factors, such as age, education, language proficiency, work experience, and other criteria.",
//     pointsTitle: "The Express Entry system is the primary pathway for economic immigration to Canada and includes three main federal immigration programs:",
//     points: [
//       {
//         title: "Federal Skilled Worker Program (FSWP): ",
//         desc: "This program is for individuals with the skills and experience needed to contribute to the Canadian economy. Applicants are assessed based on factors such as education, work experience, language proficiency, and adaptability.",
//       },
//       {
//         title: "Federal Skilled Trades Program (FSTP): ",
//         desc: "This program is for individuals with experience in skilled manual trades. To qualify, applicants must meet specific requirements related to their trade experience, language proficiency, and job offer or certification.",
//       },
//       {
//         title: "Canadian Experience Class (CEC): ",
//         desc: "This program is for individuals who have gained skilled work experience in Canada on a temporary basis. It is designed for individuals who have already adapted to the Canadian work environment and wish to transition to permanent residence.",
//       },
//     ],
//     summury: "",
//   },
//   {
//     visa: "Provincial Nominee Program (PNP)",
//     id: "bce4b3b1-2b43-4736-8166-ef744a034780",
//     title:
//       "A Canada Provincial Nominee Program (PNP) is an immigration program operated by individual provinces and territories in Canada. These programs allow provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a specific province or territory. The Provincial Nominee Programs are an essential component of Canada's overall immigration system and are designed to address regional labor market needs and economic priorities.",
//     pointsTitle:
//       "Key features of the Canada Provincial Nominee Program include:",
//     points: [
//       {
//         title: "Provincial/Territorial Control: ",
//         desc: "Each province and territory in Canada (except for Quebec, which has its own selection system) has its own PNP with specific criteria tailored to address local economic and demographic needs.",
//       },
//       {
//         title: "Nomination Process: ",
//         desc: "Through a PNP, a province or territory can nominate individuals who meet their specific criteria for permanent residence in Canada. Provincial nominations are typically based on factors such as the applicant's skills, work experience, and ability to contribute to the local economy.",
//       },
//       {
//         title: "Express Entry-linked PNPs: ",
//         desc: "Many provinces and territories have immigration streams that are aligned with the federal Express Entry system. Candidates in the Express Entry pool may receive a provincial nomination, which significantly boosts their Comprehensive Ranking System (CRS) score, increasing their chances of receiving an Invitation to Apply (ITA) for permanent residence.",
//       },
//       {
//         title: "Non-Express Entry PNPs: ",
//         desc: "Some provinces have PNP streams that operate outside the Express Entry system. These streams often target individuals with specific skills or work experience relevant to the needs of the province.",
//       },
//       {
//         title: "Eligibility Criteria: ",
//         desc: "Each PNP has its own set of eligibility criteria, including requirements related to education, work experience, language proficiency, and in some cases, a job offer from an employer in the province.",
//       },
//       {
//         title: "Application Process: ",
//         desc: "Candidates interested in a specific PNP must typically apply directly to the province or territory. Once nominated, they can then apply to the federal government for permanent residence.",
//       },
//     ],
//     summury:
//       "Overall, the Provincial Nominee Program provides provinces and territories with a mechanism to address specific economic and demographic challenges while offering individuals the opportunity to immigrate to Canada and contribute to the development of specific regions within the country.",
//   },
//   {
//     visa: "Work Visa (LMIA)",
//     id: "add82ce5-9d8f-4c77-bdfc-98b4d18264a6",
//     title:
//       "A Canada Work Permit, also known as a Labour Market Impact Assessment (LMIA) Work Permit, is a document issued by the Canadian government that allows foreign nationals to work in Canada for a specified employer. The LMIA is a crucial component of the work permit application process, and it is an assessment conducted by the Employment and Social Development Canada (ESDC) to ensure that hiring a foreign worker will not have a negative impact on the Canadian labor market.",
//     pointsTitle: "Key points about the Canada Work Permit (LMIA):",
//     points: [
//       {
//         title: "Labour Market Impact Assessment (LMIA",
//         desc: "Before an employer can hire a foreign worker, they generally need to apply for an LMIA from ESDC. The purpose of the LMIA is to demonstrate that there is a genuine need for a foreign worker to fill a particular job and that no qualified Canadian worker is available to do the job.",
//       },
//       {
//         title: "Job Offer: ",
//         desc: "To apply for a work permit, the foreign worker must have a job offer from a Canadian employer. The job offer is usually accompanied by a positive LMIA, which indicates that the employer has made efforts to hire a Canadian worker but was unable to find one with the required qualifications.",
//       },
//       {
//         title: "Duration of Work Permit: ",
//         desc: "The duration of a work permit can vary depending on the specific circumstances, the job offer, and the LMIA. Work permits are generally issued for a specific period, and they may be extended or renewed under certain conditions.",
//       },
//       {
//         title: "Spousal Work Permit: ",
//         desc: "In many cases, spouses or common-law partners of foreign workers in Canada may also be eligible to apply for an open work permit, allowing them to work for any employer in Canada.",
//       },
//       {
//         title: "Changing Employers: ",
//         desc: "If a foreign worker with an LMIA Work Permit wants to change employers, they typically need to obtain a new LMIA for the new job, unless they are exempt from the LMIA requirement.",
//       },
//     ],
//     summury: "",
//   },
//   {
//     visa: "Visitor Visa",
//     id: "90ed807b-06dd-4bd0-bf04-0e6db6177346",
//     title:
//       "A Canada Visitor Visa, also known as a Temporary Resident Visa (TRV), is an official document issued by the Canadian government that allows foreign nationals to enter Canada temporarily for tourism, visiting family or friends, attending conferences, or conducting business. It is a form of authorization that is stamped or affixed into the passport or travel document of the visitor.",
//     pointsTitle: "Key points about the Canada Visitor Visa:",
//     points: [
//       {
//         title: "Temporary Stay: ",
//         desc: "The Visitor Visa is for individuals who plan to stay in Canada for a short duration, typically for tourism, family visits, or business purposes. It does not grant permanent residence.",
//       },
//       {
//         title: "Application Process: ",
//         desc: "Individuals from countries that are not visa-exempt need to apply for a Visitor Visa before coming to Canada. The application process involves submitting the required documents, including proof of the purpose of the visit, financial ability to support the stay, ties to the home country, and a willingness to leave Canada at the end of the authorized stay.",
//       },
//       {
//         title: "Eligibility Criteria: ",
//         desc: "Applicants must meet certain eligibility criteria, including demonstrating that they have a valid reason for visiting Canada, providing evidence of financial support during their stay, having a clean criminal record, and being in good health. The immigration officer will assess these factors when processing the application.",
//       },
//       {
//         title: "Duration of Stay: ",
//         desc: "The Visitor Visa specifies the period for which the individual is allowed to stay in Canada. It's important to adhere to the authorized duration and leave the country before the visa expires.",
//       },
//       {
//         title: "Visa Exemptions: ",
//         desc: "Citizens of certain countries do not require a Visitor Visa to enter Canada for short stays. However, they may still need to obtain an Electronic Travel Authorization (eTA) before boarding their flight to Canada.",
//       },
//       {
//         title: "Super Visa: ",
//         desc: "For parents and grandparents of Canadian citizens or permanent residents, there is a Super Visa program that allows for extended stays in Canada. It is a multiple-entry visa valid for up to 10 years.",
//       },
//       {
//         title: "Biometrics: ",
//         desc: "As part of the application process, many individuals need to provide biometric information, including fingerprints and a photo.",
//       },
//     ],
//     summury: "",
//   },
//   {
//     visa: "Student Visa",
//     id: "ffa852e7-507b-48aa-ab48-b13c9da306b1",
//     title:
//       "The Canada Student Visa, officially known as a Canadian Study Permit, is a document issued by the Canadian government that allows foreign nationals to study at designated learning institutions in Canada. This permit is a crucial requirement for international students planning to pursue academic, vocational, or professional programs in the country.",
//     pointsTitle: "Key points about the Canada Student Visa (Study Permit):",
//     points: [
//       {
//         title: "Study Permit Requirement: ",
//         desc: "In most cases, international students need a valid study permit to study in Canada. However, there are exceptions. Citizens of certain countries may be exempt from the study permit requirement if their program of study is less than six months.",
//       },
//       {
//         title: "Application Process: ",
//         desc: "To obtain a study permit, prospective international students must apply to the Immigration, Refugees, and Citizenship Canada (IRCC). The application process involves providing proof of acceptance from a designated learning institution, demonstrating financial capacity to cover tuition and living expenses, submitting a clean criminal record, and undergoing a medical examination in some cases.",
//       },
//       {
//         title: "Working While Studying: ",
//         desc: "With a valid study permit, international students in Canada are generally allowed to work part-time during the academic session and full-time during scheduled breaks. Additionally, some programs may include co-op or internship components that allow students to gain practical work experience.",
//       },
//       {
//         title: "Post-Graduation Work Permit (PGWP)",
//         desc: "After completing their studies, eligible students may apply for a Post-Graduation Work Permit, allowing them to work in Canada for a period equal to the length of their study program, up to a maximum of three years.",
//       },
//       {
//         title: "Biometrics: ",
//         desc: "As part of the application process, many individuals applying for a study permit need to provide biometric information, including fingerprints and a photo.",
//       },
//       {
//         title: "Dependent Accompaniment: ",
//         desc: "Spouses or common-law partners and dependent children may be eligible for a study permit or work permit to accompany the student during their studies.",
//       },
//       {
//         title: "Duration of Study Permit: ",
//         desc: "The study permit is typically issued for the duration of the academic program, plus an additional 90 days. It is important for students to apply for an extension if they plan to continue their studies or if their permit is set to expire.",
//       },
//     ],
//     summury:
//       "International students are encouraged to begin the study permit application process well in advance of their intended program start date. The application processing times can vary, and it's essential to ensure all required documentation is submitted accurately and on time.",
//   },
//   {
//     visa: "Business or Investment Visa",
//     id: "78080c2a-fb23-4e8b-9cbf-18fb4fcddf9e",
//     title:
//       "Canada does offer immigration pathways for individuals interested in conducting business activities or investing in the country. ",
//     pointsTitle: "The relevant programs include:",
//     points: [
//       {
//         title: "Start-up Visa Program: ",
//         desc: "This program is designed for entrepreneurs who wish to start a business in Canada and who have the support of a designated organization (angel investor groups, venture capital funds, or business incubators). If the applicant's business idea is accepted, they can apply for permanent residence.",
//       },
//       {
//         title: "Self-Employed Persons Program",
//         desc: "This program is for individuals who have relevant experience in cultural activities, athletics, or farm management and can be self-employed in Canada. Applicants must demonstrate that they intend to contribute to the cultural or athletic life of Canada or can create their own employment by purchasing and managing a farm.",
//       },
//       {
//         title: "Investor Programs (Provincial Nominee Programs): ",
//         desc: "Some provinces in Canada have investor immigration programs that require individuals to make a significant investment in a local business. These programs are often part of the Provincial Nominee Program (PNP).",
//       },
//       {
//         title: "Intra-Company Transfers: ",
//         desc: "If you work for a multinational company and are being transferred to a Canadian office, you may be eligible for a work permit under the Intra-Company Transfer category.",
//       },
//       {
//         title: "Business Visitor Visa: ",
//         desc: "While not a permanent immigration program, the Business Visitor Visa allows individuals to visit Canada for short-term business-related activities. This includes attending conferences, meetings, and negotiating contracts. Business visitors do not intend to enter the Canadian labor market and are generally allowed to stay for a short duration.",
//       },
//     ],
//     summury: "",
//   },
//   {
//     visa: "Family / Dependent Visa",
//     id: "4a58f58e-7868-4589-be7f-0136a850da84",
//     title:
//       "Family members of individuals who are in Canada on various visas or permits may be eligible to accompany or join them through specific sponsorship programs or as dependents.",
//     pointsTitle:
//       "Here are common scenarios where dependents may be eligible to join a family member in Canada:",
//     points: [
//       {
//         title: "Family Class Sponsorship: ",
//         desc: "Canadian citizens and permanent residents can sponsor their family members, including spouses, common-law partners, dependent children, parents, and grandparents, to immigrate to Canada. Successful sponsorship allows family members to obtain permanent residence.",
//       },
//       {
//         title: "Spousal/Common-Law Partner Sponsorship: ",
//         desc: "Canadian citizens and permanent residents can sponsor their spouses or common-law partners for permanent residence. The sponsored spouse or partner can then obtain an open work permit to work in Canada while their permanent residence application is being processed.",
//       },
//       {
//         title: "Dependent Children: ",
//         desc: "Individuals who have obtained study permits, work permits, or are permanent residents in Canada may be eligible to include their dependent children in their application or sponsor them separately.",
//       },
//       {
//         title: "Refugee Sponsorship: ",
//         desc: "Individuals granted refugee status in Canada may be eligible to sponsor their dependent family members to join them in Canada.",
//       },
//     ],
//     summury: "",
//   },
// ];
const Canada = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {canadaVisaList.map((item, index) => {
          return (
            <Box
              component={Link}
              href={item.link}
              sx={{
                display: "flex",
                bgcolor: "whitesmoke",
                p: "10px",
                alignItems: "center",
                borderRadius: "4px",
                justifyContent: "space-between",
                // gap: "5px"
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
              <AddIcon />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// const Visa = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Box sx={{ mt: "10px" }}>
//       <Box
//         sx={{
//           display: "flex",
//           bgcolor: "whitesmoke",
//           p: "3px 8px",
//           alignItems: "center",
//           borderRadius: "4px",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography sx={{ fontWeight: "bold" }}>{props.visa}</Typography>
//         <IconButton onClick={() => setIsOpen((prev) => !prev)}>
//           {!isOpen ? <AddIcon /> : <RemoveIcon />}
//         </IconButton>
//       </Box>
//       {isOpen && (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             mt: "5px",
//           }}
//         >
//           <Typography>{props.title}</Typography>
//           <Typography>{props.pointsTitle}</Typography>
//           <Box sx={{ ml: "30px" }} component="ul">
//             {props.points.map((item, index) => {
//               return (
//                 <Box component="li" key={index}>
//                   <Typography>
//                     <b>{item.title} </b>
//                     {item.desc}
//                   </Typography>
//                 </Box>
//               );
//             })}
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };
export default Canada;
