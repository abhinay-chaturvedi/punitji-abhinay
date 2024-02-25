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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DataTable from "@/components/DataTable";
import { getLanguageTest, saveLanguageTest } from "@/services/client/languageTest";
const LanguageTestColumn = [
  { field: "id", headerName: "ID" },
  { field: "exam", headerName: "Exam", width: 150 },
  { field: "speakingBand", headerName: "Speaking Band", width: 200 },
  {
    field: "listeningBand",
    headerName: "Listening Band",
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
    field: "readingBand",
    headerName: "Reading Band",
    width: 150,
  },
  {
    field: "writingBand",
    headerName: "Writing Band",
    width: 150,
  },
  {
    field: "overallBand",
    headerName: "Overall Band",
    width: 150,
  },
];
const LanguageTest = ({ userState }) => {
  const [arrow, setArrow] = useState(false);
  const [age, setAge] = useState("");
  const [btnText, setBtnText] = useState("save");
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [languageRows, setLanguageRows] = useState([]);
  const [languageDetail, setLanguageDetail] = useState({
    exam: "",
    speakingBand: "",
    listeningBand: "",
    writingBand: "",
    readingBand: "",
    overallBand: "",
  })
  const handleSave = async () => {
    try {
      const data = {userId: userState.id, ...languageDetail};
      if (!data.exam || !data.exam.length) {
        return setError("Please fill Exam!");
      }
      if (!data.speakingBand || !data.speakingBand.length) {
        return setError("Please fill Speaking Band!");
      }
      if (!data.listeningBand || !data.listeningBand.length) {
        return setError("Please fill Listening Band!");
      }
      if (!data.readingBand || !data.readingBand.length) {
        return setError("Please fill Reading Band!");
      }
      if (!data.writingBand || !data.writingBand.length) {
        return setError("Please fill Writing Band!");
      }
      if (!data.overallBand || !data.overallBand.length) {
        return setError("Please fill Overall Band!");
      }
      // console.log("languageDetail", languageDetail);
      setBtnText("saving...");
      const result = await saveLanguageTest(data);
      // console.log("🚀 ~ file: LanguageTest.jsx:93 ~ handleSave ~ result:", result)
      if(result.status == 200) {
        
        setFormOpen(false);
        setLanguageRows((prev) => ([result.data, ...prev]))
      }
      setBtnText("save");
    } catch(err) {
      console.log("🚀 ~ file: LanguageTest.jsx:26 ~ handleSave ~ err:", err)
      setError(err.message);
      setBtnText("save");
    }
  }
  const fetchLanguageTest = async () => {
    try {
      const userId = userState.id;
      const result = await getLanguageTest(userId);
      console.log("🚀 ~ file: LanguageTest.jsx:110 ~ fetchLanguageTest ~ result:", result)
      if(result.status == 200) {
        setLanguageRows(result.data);
      }
    } catch(err) {
      console.log("🚀 ~ file: LanguageTest.jsx:115 ~ fetchLanguageTest ~ err:", err)
    }
  }
  useEffect(() => {
    fetchLanguageTest();
  }, []);
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
          <Typography>Language Test</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        {arrow && languageRows && (<DataTable rows={languageRows} columns={LanguageTestColumn} />)}
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
            <Grid item xs={12} md={2}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Exam</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={languageDetail.exam}
                  label="Exam"
                  name="exam"
                  onChange={(e) => {
                    setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                    setError(null);
                  }}
                >
                  <MenuItem value={"IELTS"}>IELTS</MenuItem>
                  <MenuItem value={"PTE"}>PTE</MenuItem>
                  <MenuItem value={"CELPIP"}>CELPIP</MenuItem>
                  <MenuItem value={"FRENCH"}>FRENCH</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item md={1.7}>
              <CustomInput value={languageDetail.speakingBand} label="Speaking band" type="number" name="speakingBand" setInput={(e) => {
                setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                setError(null);
              }}/>
            </Grid>
            <Grid xs={12} item md={1.7}>
              <CustomInput value={languageDetail.listeningBand} label="Listening band" type="number" name="listeningBand" setInput={(e) => {
                setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                setError(null);
              }} />
            </Grid>
            <Grid xs={12} item md={1.7}>
              <CustomInput value={languageDetail.readingBand} label="Reading band" type="number" name="readingBand" setInput={(e) => {
                setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                setError(null);
              }} />
            </Grid>
            <Grid xs={12} item md={1.7}>
              <CustomInput value={languageDetail.writingBand} label="Writing band" type="number" name="writingBand" setInput={(e) => {
                setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                setError(null);
              }}/>
            </Grid>
            <Grid xs={12} item md={1.7}>
              <CustomInput value={languageDetail.overallBand} label="Overall band" type="number" name="overallBand" setInput={(e) => {
                setLanguageDetail((prev) => ({...prev, [e.target.name]: e.target.value}));
                setError(null);
              }} />
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center" xs={12} item>
              <Button onClick={handleSave} disabled={(btnText != "save")}>{btnText}</Button>
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

export default LanguageTest;
