import React from 'react'

const Page = ({params}) => {
  return (
    <div>{params.clientId}</div>
  )
}

export default Page