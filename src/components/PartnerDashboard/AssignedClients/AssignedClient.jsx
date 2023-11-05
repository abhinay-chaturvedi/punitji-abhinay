// import React from 'react'

// const AssignedClient = () => {
//   return (
//     <div>AssignedClient</div>
//   )
// }

// export default 
import * as React from 'react';
import { Scrollbar } from '@/components/scrollbar';
import DataTable from '@/components/DataTable';


export default function AssignedClient() {
  return (
    <Scrollbar>
        <DataTable/>
    </Scrollbar>
  );
}