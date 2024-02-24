// const { default: QueryPage } = require("@/components/QueryPage/QueryPage")
import QueryCard from "@/components/QueryPage/QueryCard";
import QueryForm from "@/components/QueryPage/QueryForm";
import { getSession } from "@/lib/auth-service";
import { getQueries } from "@/lib/query-service";
import { Box, Container } from "@mui/material";
import jwt from "jsonwebtoken";
import { cookies, headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
const Page = async () => {
  // redirect("/login")
//   const token = cookies().get("token")?.value;
//   if (!token) {
//     redirect("/login");
//   }
//   console.log(token, "token in query");
//   const currentUser = jwt.verify(token, process.env.JWT_SECRET);
//   console.log("🚀 ~ Page ~ currentUser:", currentUser);
const currentUser = await getSession();
console.log("🚀 ~ Page ~ currentUser:", currentUser);
  if (!currentUser) {
    redirect("/login");
    // notFound();
  }

  const queries = await getQueries(currentUser._id);
  console.log(queries);
  return (
    <Box>
      <Container>
        <Box>
            <QueryForm/>
        </Box>
        <Box>
          {queries.map((item, index) => {
            return <QueryCard key={index} item={item} index={index} />;
          })}
        </Box>
      </Container>
    </Box>
  );
};
export default Page;
