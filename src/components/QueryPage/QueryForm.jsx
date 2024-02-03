import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '@/contexts/user/context';

export default function MultilineTextFields({ getQueries }) {
    const [query, setQuery] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef();
    const user = useContext(UserContext);
    // console.log("🚀 ~ MultilineTextFields ~ ref:", ref)
    
    useEffect(() => {
        // ref.current.clientWidth = "100%"
        ref.current.style.width = '90%';
        // ref.current.style.marginHorizontal = "auto";
    }, [])
    const handleSubmit = async () => {
        try {
            if(!query) {
                return ;
            }
            setIsSubmitting(true)
            const res = await fetch("/api/queries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({userId: user.state?.id, query: query, name: user.state?.name, email: user.state?.email, userType: user.state.role})
            })
            const result = await res.json();
            if(result.status == 200) {
                setQuery("");
                getQueries()
            }
            console.log("🚀 ~ handleSubmit ~ result:", result)
            setIsSubmitting(false);
        } catch(err) {
            console.log("🚀 ~ handleSubmit ~ err:", err)
            setIsSubmitting(false);
        }
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ margin: "auto", maxWidth: "70%"}}>

        <TextField
          id="outlined-multiline-static"
          label="query"
          multiline
          minRows={2}
          sx={{width: "100%"}}
          fullWidth={true}
          ref={ref}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        //   defaultValue="Default Value"
        />
        <Box sx={{display: "flex",justifyContent: "center"}}>
        <Button disabled={isSubmitting} onClick={handleSubmit}>{isSubmitting? "Please wait...": "Submit"}</Button>
        </Box>
      </Box>      
    </Box>
  );
}