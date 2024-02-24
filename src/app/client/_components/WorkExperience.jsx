import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BasicDatePicker from "@/components/Date";
import CustomInput from "@/components/CustomInput";
import DataTable from "@/components/DataTable";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  getWorkExperience,
  saveWorkExperience,
} from "@/services/client/workExperience";
const experienceColumn = [
  { field: "id", headerName: "ID" },
  { field: "jobTitle", headerName: "Job Title", width: 200 },
  { field: "company", headerName: "Company", width: 200 },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  // {
  //   field: "country",
  //   headerName: "Country",
  //   description: "This column has a value getter and is not sortable.",
  //   // sortable: false,
  //   // valueGetter: (params) =>
  //   //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 150,
  },
];
const WorkExperience = ({ userState }) => {
  const [arrow, setArrow] = useState(false);
  const [age, setAge] = useState("");
  const [experienceRows, setExperienceRows] = useState(null);
  const [btnText, setBtnText] = useState("save");
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [workExperience, setWorkExperience] = useState({
    jobTitle: "",
    company: "",
    country: "",
    startDate: "",
    endDate: "",
  });
  const fetchExperieceDetail = async () => {
    try {
      const userId = userState.id;
      const result = await getWorkExperience(userId);
      console.log(
        "🚀 ~ file: WorkExperience.jsx:55 ~ fetchExperieceDetail ~ result:",
        result
      );
      if (result.status == 200) {
        setExperienceRows(result.data);
      }
    } catch (err) {
      console.log(
        "🚀 ~ file: WorkExperience.jsx:54 ~ fetchExperieceDetail ~ err:",
        err
      );
    }
  };
  useEffect(() => {
    fetchExperieceDetail();
  }, []);
  const handleSave = async () => {
    try {
      const data = {
        userId: userState.id,
        ...workExperience,
      };
      console.log(
        "🚀 ~ file: WorkExperience.jsx:91 ~ handleSave ~ data:",
        data
      );
      if (!data.jobTitle || !data.jobTitle.length) {
        return setError("Please fill Job Title!");
      }
      if (!data.company || !data.company.length) {
        return setError("Please fill Company!");
      }
      if (!data.country || !data.country.length) {
        return setError("Please fill country!");
      }
      if (!data.startDate || !data.startDate.length) {
        return setError("Please fill start date!");
      }
      if (!data.endDate || !data.endDate.length) {
        return setError("Please fill end date!");
      }
      // return ;
      setBtnText("saving...");
      const result = await saveWorkExperience(data);
      console.log(
        "🚀 ~ file: WorkExperience.jsx:113 ~ handleSave ~ result:",
        result
      );
      if (result.status == 200) {
        setBtnText("save");
        setError(null);
        setExperienceRows((prev) => [result.data, ...prev]);
        setWorkExperience({
          jobTitle: "",
          company: "",
          country: "",
          startDate: "",
          endDate: "",
        });
        setFormOpen(false)
      } else {
        setBtnText("save");
        setError(result.message);
      }
    } catch (err) {
      console.log("🚀 ~ file: WorkExperience.jsx:130 ~ handleSave ~ err:", err);
      setBtnText("save");
      setError("something went wrong!");
    }
  };
  return (
    <Box sx={{ mt: "10px" }}>
      <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Work Experience</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        {arrow && experienceRows && (
          <DataTable rows={experienceRows} columns={experienceColumn} />
        )}
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
            {/* <Grid item xs={12} md={5.5}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={(e) => setAge(e.target.value)}
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
            </Grid> */}
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                label="Job Title"
                name={"jobTitle"}
                value={workExperience.jobTitle}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                label="Company"
                name="company"
                value={workExperience.company}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <CustomInput
                setInput={(e) => {
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  setError(null);
                }}
                name="country"
                label="Country"
                value={workExperience.country}
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <BasicDatePicker
                setDate={(value) => {
                  setWorkExperience((prev) => ({ ...prev, startDate: value }));
                  setError(null);
                }}
                label="Start Date"
              />
            </Grid>
            <Grid xs={12} item md={5.5}>
              <BasicDatePicker
                setDate={(value) => {
                  setWorkExperience((prev) => ({ ...prev, endDate: value }));
                  setError(null);
                }}
                label="End Date"
              />
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={12}
              item
            >
              <Button onClick={handleSave} disabled={btnText != "save"}>
                {btnText}
              </Button>
            </Grid>
          </Grid>
        )}
        {arrow && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              startIcon={
                formOpen ? (
                  <RemoveCircleOutlineIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )
              }
              onClick={() => setFormOpen((prev) => !prev)}
            >
              {formOpen ? "Remove" : "Add"}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WorkExperience;
