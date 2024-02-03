import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import InputFileUpload from "./UploadButton";
import CustomListItem from "./CustomListItem";
import { Divider } from "@mui/material";
import { useLogin } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import getUser from "@/services/client/getUser";
import { UserContext } from "@/contexts/user/context";
import { useContext } from "react";
import { setUser } from "@/contexts/user/action";
import { useEffect } from "react";
import { useState } from "react";

const DocumentPage = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  // const User = useLogin();
  const [documents, setDocuments] = useState([]);
  const router = useRouter();
  // console.log("Logged in user is", User);
  // console.log("hello");
  const user = useContext(UserContext);
  console.log("🚀 ~ file: DocumentPage.jsx:36 ~ DocumentPage ~ user:", user);
  const getDocuments = async () => {
    try {
      const userId = user.state.id || "";
      const res = await fetch(
        `/api/document/getClientDocumentsById?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await res.json();
      console.log("🚀 ~ file: DocumentPage.jsx:54 ~ getDocuments ~ result:", result)
      if (result.status == 200) {
        setDocuments(result.data?.documents);
      }
    } catch (err) {
      console.log("🚀 ~ file: DocumentPage.jsx:44 ~ getDocuments ~ err:", err);
    }
  };
  useEffect(() => {
    getDocuments();
  }, []);
  return (
    <Box>
      <List>
        {documents?.map((item) => {
          return <CustomListItem key={item.id} item={item} setDocuments={setDocuments}/>;
        })}
      </List>
    </Box>
  );
};

export default DocumentPage;
