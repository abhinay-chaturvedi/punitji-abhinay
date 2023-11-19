import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Alert,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BasicDatePicker from "@/components/Date";
import CustomInput from "@/components/CustomInput";
import DataTable from "@/components/DataTable";
import { getEducationDetail, saveEducationDetail } from "@/services/user/education";
import { useEffect } from "react";

const educationColumn = [
  { field: "id", headerName: "ID" },
  { field: "degree", headerName: "Degree" },
  { field: "college", headerName: "College/School", width: 200 },
  {
    field: "stream",
    headerName: "Stream",
  },
  {
    field: "country",
    headerName: "Country",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 150
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 150
  },
];
const Education = () => {
  const [arrow, setArrow] = useState(false);
  const [age, setAge] = useState("");
  const [educationRows, setEducationRows] = useState(null);
  const [btnText, setBtnText] = useState("save");
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [education, setEducation] = useState({
    degree: null,
    college: null,
    stream: null,
    country: null,
    startDate: null,
    endDate: null,
    score: null,
  });
  console.log(
    "🚀 ~ file: Education.jsx:57 ~ Education ~ education:",
    education
  );
  const handleValidate = (data) => {
    if (!data.degree) {
      return "Please fill degree!";
    }
    if (!data.college) {
      return "Please fill college!";
    }
    if (!data.stream) {
      return "Please fill stream!";
    }
    if (!data.country) {
      return "Please fill country!";
    }
    if (!data.startDate) {
      return "Please fill start date!";
    }
    if (!data.endDate) {
      return "Please fill end date!";
    }
    if (!data.score) {
      return "Please fill score!";
    }
    return "success";
  };
  const handleSave = async () => {
    try {
      const userId = "8ddda531-e273-49ac-b24c-410d04efb7e9";
      const data = { ...education, userId };
      const text = handleValidate(data);
      if (text != "success") {
        setError(text);
        return;
      }
      setBtnText("saving...");
      const result = await saveEducationDetail(data);
      console.log("🚀 ~ file: Education.jsx:65 ~ handleSave ~ result:", result);
      if(result.status === 200) {
        setBtnText("successfully saved");
        setEducationRows([...educationRows, result.data]);
        setEducation({
          degree: null,
          college: null,
          stream: null,
          country: null,
          startDate: null,
          endDate: null,
          score: null,
        });
      } else {
        setBtnText("save");
      }
    } catch (err) {
      console.log("🚀 ~ file: Education.jsx:63 ~ handleSave ~ err:", err);
      setBtnText("save");
    }
  };
  const geteducationDetail = async () => {
    try {
      const userId = "8ddda531-e273-49ac-b24c-410d04efb7e9"
      const result = await getEducationDetail(userId);
      console.log("🚀 ~ file: Education.jsx:120 ~ geteducationDetail ~ result:", result)
      setEducationRows(result.data);
    } catch(err) {
      console.log("🚀 ~ file: Education.jsx:120 ~ getEducationDetail ~ err:", err)
    }
  }
  useEffect(() => {
    geteducationDetail();
  }, [])
  return (
    <Box sx={{ mt: "10px" }}>
      <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: "5px"
          }}
        >
          <Typography>Education</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        {arrow && educationRows&& <DataTable rows={educationRows} columns={educationColumn} />}
        {arrow && error && (
          <Alert
            sx={{ width: "100%", my: 1 }}
            severity="error"
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        )}
        {arrow && formOpen && (
          <Grid container gap={2} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={12} md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Degree</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={education.degree ? education.degree : ""}
                  label="Degree"
                  name="degree"
                  onChange={(e) => {
                    setEducation((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }));
                    setError(null);
                  }}
                >
                  <MenuItem value={"phd"}>Ph.D</MenuItem>
                  <MenuItem value={"post-graduation"}>Post-Graduation</MenuItem>
                  <MenuItem value={"graduation"}>Graduation</MenuItem>
                  <MenuItem value={"diploma"}>Diploma</MenuItem>
                  <MenuItem value={"senior-secondary"}>
                    Senior Secondary
                  </MenuItem>
                  <MenuItem value={"high-school"}>High School</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setEducation((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                name="college"
                label="University or School"
                value={education.college ? education.college : ""}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setEducation((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                name="stream"
                label="Stream"
                value={education.stream ? education.stream : ""}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setEducation((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                name="country"
                label="Country"
                value={education.country ? education.country : ""}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <BasicDatePicker
                setDate={(value) => {
                  setEducation((prev) => ({ ...prev, startDate: value }));
                  setError(null);
                }}
                label="Start Date"
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <BasicDatePicker
                setDate={(value) => {
                  setEducation((prev) => ({ ...prev, endDate: value }));
                  setError(null);
                }}
                label="End Date"
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setEducation((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                name="score"
                label="Score in %"
                value={education.score ? education.score : ""}
              />
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={12}
              item
              md={12}
            >
              <Button onClick={handleSave} disabled={btnText != "save"}>
                {btnText}
              </Button>
            </Grid>
          </Grid>
        )}
        {arrow&& <Box sx={{display: "flex", justifyContent: "flex-end"}}>
          <Button startIcon={<AddCircleOutlineIcon/>} onClick={() => setFormOpen((prev) => !prev)}>{formOpen? "Remove": "Add"}</Button>
        </Box>}
      </Box>
    </Box>
  );
};

export default Education;
