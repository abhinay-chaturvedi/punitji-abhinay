// const { default: QueryPage } = require("@/components/QueryPage/QueryPage")
import QueryCard from "@/components/Query/QueryCard";
import QueryForm from "@/components/Query/QueryForm";
import { getSession } from "@/lib/auth-service";
import { getQueries } from "@/lib/query-service";
import { Box, Container } from "@mui/material";
import jwt from "jsonwebtoken";
import { cookies, headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
const Page = async () => {
  
const currentUser = await getSession();
  if (!currentUser) {
    // redirect("/login");
    notFound();
  }

  const queries = await getQueries(currentUser._id);
  return (
    <Box>
      <Container>
        <Box sx={{boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)", p: "5px"}}>

       
        <Box>
            <QueryForm/>
        </Box>
        <Box>
          {queries.map((item, index) => {
            return <QueryCard key={index} item={item} index={index} />;
          })}
        </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Page;
