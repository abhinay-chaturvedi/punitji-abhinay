import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import MultilineTextFields from './QueryForm'
import { useContext } from 'react'
import { UserContext } from '@/contexts/user/context'
import { useEffect, useState } from 'react'
const queries = [
    {
        q: "hello from this side",
        res: "hello from the response side"
    },
    {
        q: "hello from this side",
        res: "hello from the response side skjdksd jlksjd lsdjflskdj flskjfklsdjf ldslsdjflsdjflksdj f"
    },
    {
        q: "hello from this side",
        res: "hello from the response side"
    },
]
const QueryPage = () => {
    const user = useContext(UserContext);
    console.log("🚀 ~ QueryPage ~ user:", user)
    const [queryArray, setQueryArray] = useState([]);
    const getQueries = async () => {
        try {
            const res = await fetch(`/api/queries?userId=${user.state.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            const result = await res.json();
            console.log("🚀 ~ getQueries ~ result:", result)
            if(result.status == 200) {
                setQueryArray(result.data);
            }
        } catch(err) {
            console.log("🚀 ~ getQueries ~ err:", err)
        }
    }
    useEffect(() => {
        getQueries();
    }, []);
  return (
    <Box>
        <Container>
            <Box>
                <MultilineTextFields getQueries={getQueries}/>
            </Box>
            <Box>
                {
                    queryArray.map((item, index) => {
                        return (
                            <Box sx={{mt: "10px", mb: "5px"}}>
                                <h3>{"Q-" + (index+1) + ")  " + item.query}</h3>
                                <Typography sx={{ml: "45px"}}>{item.response? item.response: "Not Answered! You will get the response very soon."}</Typography>
                                <Divider/>
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
    </Box>
  )
}

export default QueryPage