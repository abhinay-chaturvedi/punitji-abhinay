import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CircularProgress, Typography } from '@mui/material';
import uploadfile from '@/services/document/upload';
import { useLogin } from '@/hooks/auth';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({doc_id, setFileName, fileName, setDocuments}) {
    
    const [uploadText, setUploadText] = React.useState("upload");
    const [file, setFile] = React.useState(null);
    const User = useLogin();
    console.log(User);
    const handleChange = async (e) => {
        try {
            console.log("event", e);
            console.log(e.target.files)
            const files = e.target.files;
            if(!files.length) {
                console.log("no file selected");
                return ;
            }
            const file_0 = files[0];
            console.log("🚀 ~ file: UploadButton.jsx:31 ~ handleChange ~ file:", file_0)
            setFileName(file_0.name);
            setFile(file_0);
            console.log(User.role.toLowerCase(), User.email);
            console.log("🚀 ~ file: UploadButton.jsx:35 ~ handleChange ~ formData:", formData)
             
        } catch(err) {
            console.log("🚀 ~ file: UploadButton.jsx:34 ~ handleChange ~ err:", err)
            return err;
        }
    }
    const handleUpload = async () => {
        if(!file) return ;
        setUploadText("uploading...")
        try {
            const formData = new FormData();
            formData.append("role", User.role.toLowerCase());
            formData.append("file", file);
            formData.append('email', User.email);
            formData.append('doc_id', doc_id);
            const res = await uploadfile(formData);
            console.log("🚀 ~ file: UploadButton.jsx:35 ~ handleChange ~ res:", res);
            setFileName(null);
            if(res && res.prismaData && res.prismaData.documents)
            setDocuments(res.prismaData.documents)
            
            console.log(res.prismaData.documents)

            if(res.status === 200)
            setUploadText("uploaded")
            else setUploadText("upload");
        } catch(err) {
            console.log("🚀 ~ file: UploadButton.jsx:58 ~ handleUpload ~ err:", err)
            setUploadText("upload");
        }
    }
    
  return (
    <>
    {
        !fileName? (
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            <Typography>select</Typography>
            <VisuallyHiddenInput onChange={handleChange} type="file" />
            </Button>
        ): (
            <Button onClick={handleUpload} disabled={(uploadText==='uploading...') || (uploadText==='uploaded')} component="label" variant="contained" sx={{textTransform: "capitalize"}} startIcon={<CloudUploadIcon />}>
            <Typography>{uploadText}</Typography>
            </Button>
        )
    }
    </>
  );
}