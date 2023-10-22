import RequestCard from '@/components/RequestCard/RequestCard'
import { Container, Stack } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <Container maxWidth = "xl" sx={{py: "10px"}}>
      <Stack spacing={{ xs: 1, sm: 1 }} direction={{ xs: 'column', sm: 'row' }}  useFlexGap flexWrap="wrap">
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit.jsdskjls kjhdskhhds sdhkj shk shjsdh slkjflsakjf sljflskfj lskj lskfjlsk fl lskjflskfjlasjf sl s fs"
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <RequestCard
          name="John Doe"
          email="johndoe@example.com"
          phone="123-456-7890"
          subject="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
     </Stack>
    </Container>
  )
}

export default Dashboard