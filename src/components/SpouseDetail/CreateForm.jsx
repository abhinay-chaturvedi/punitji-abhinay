"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'sonner';

const CreateForm = ({createSpouseRow}) => {
    const [disabled, setDisabled] = useState(false);
    const handleCreate = async () => {
        setDisabled(true);
        await createSpouseRow();
        setDisabled(false);
        toast.success("Form created!")
    }
    return (
        <Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                <Typography sx={{fontSize: "20px", fontWeight: "bold"}}>Are you married?</Typography>
                <Button disabled={disabled} onClick={handleCreate} sx={{bgcolor: "gray", color: "black"}}>Create form</Button>
            </Box>
            <Box>
                <Typography sx={{color: "red"}}>Make sure, you only create form if you are married, because form can not be undo</Typography>
            </Box>
        </Box>
    )
}

export default CreateForm