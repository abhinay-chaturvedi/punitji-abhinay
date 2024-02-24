import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import { Box } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const SideBarMenu = ({ 
  session
}) => {
  return (
    <Box sx={{p: "10px 20px"}}>
      <SideBarMenuItem
        url={`/${session.role.toLowerCase()}`}
        icon={<DashboardIcon sx={{fontSize: "28px"}} />}
        label="Profile"
      />
      {session.role == "CLIENT" && <SideBarMenuItem
        url={"/client/track-process"}
        icon={<TrackChangesIcon sx={{fontSize: "28px"}}/>}
        label="Track Process"
      />}
      {session.role == "PARTNER" && <SideBarMenuItem
        url={"/partner/cases"}
        icon={<AccessibilityNewIcon sx={{fontSize: "28px"}}/>}
        label="Cases"
      />}
      <SideBarMenuItem
        url={`/${session.role.toLowerCase()}/documents`}
        icon={<FolderIcon sx={{fontSize: "28px"}}/>}
        label="Documents"
      />
      <SideBarMenuItem
        url={`/${session.role.toLowerCase()}/references`}
        icon={<SettingsInputAntennaIcon sx={{fontSize: "28px"}}/>}
        label="References"
      />
      <SideBarMenuItem
        url={`/${session.role.toLowerCase()}/query`}
        icon={<QuestionMarkIcon sx={{fontSize: "28px"}}/>}
        label="Query"
      />
    </Box>
  );
};

export default SideBarMenu;
