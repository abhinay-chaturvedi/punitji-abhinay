import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({label, setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{p: 0, overflow: "none", width: "100%"}} components={['DatePicker']}>
        <DatePicker onChange={(value) => setDate(dayjs(value).format())} sx={{width: "100%"}}  label={label} />
      </DemoContainer>
    </LocalizationProvider>
  );
}