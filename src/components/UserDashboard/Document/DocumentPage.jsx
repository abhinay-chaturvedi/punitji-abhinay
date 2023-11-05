import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import InputFileUpload from './UploadButton';
import CustomListItem from './CustomListItem';
import { Divider } from '@mui/material';
import { useLogin } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import getUser from '@/services/user/getUser';
import { UserContext } from "@/contexts/user/context"
import { useContext } from "react"
import { setUser } from '@/contexts/user/action';

const DocumentPage = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const User = useLogin();
  const router = useRouter();
  console.log("Logged in user is", User);
  console.log("hello");
  const user = useContext(UserContext)
  console.log("🚀 ~ file: DocumentPage.jsx:36 ~ DocumentPage ~ user:", user)
  return (
    <Box>
        <List>
          {
            user.state.documents.map((item) => { 
              return (
                <CustomListItem key={item.id} item={item}/>
              )
            })
          }
        </List>
    </Box>
  )
}

export default DocumentPage