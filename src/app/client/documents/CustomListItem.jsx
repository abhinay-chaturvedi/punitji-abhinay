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
import { Button, Divider } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisibilityIcon from "@mui/icons-material/Visibility";
const CustomListItem = ({ item, setDocuments }) => {
  const [fileName, setFileName] = React.useState(null);
  return (
    <>
      <ListItem
        sx={{
          display: { sm: "flex", xs: "block" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.desc} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <InputFileUpload
            doc_id={item.id}
            fileName={fileName}
            setFileName={setFileName}
            setDocuments={setDocuments}
          />
          {item.url ? (
            <Button
              target="_blank"
              href={item.url}
              component="a"
              sx={{ textTransform: "capitalize" }}
              startIcon={<VisibilityIcon />}
              download
            >
              <Typography>view</Typography>
            </Button>
          ) : null}

          <Typography
            sx={{
              flex: "100%",
              mt: "5px",
              bgcolor: "whitesmoke",
              p: "2px 4px",
              borderRadius: "5px",
              width: "min-content",
            }}
          >
            {fileName}
          </Typography>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default CustomListItem;
