import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export const Home = () => {
  const FONTWEIGHTS = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];
  const FONTFAMILIES = [
    "Poppins",
    "Inter",
    "Roboto",
    "Open-Sans",
    "Montserrat",
    "Raleway",
    "Playfair-Display",
    "Fira-Sans",
  ];
  const [fontWeight, setFontWeight] = useState<string | null>("");
  const [fontFamily, setFontFamily] = useState<string | undefined>("");

  const handleChange = (event: SelectChangeEvent) => {
    setFontWeight(event.target.value);
  };
  const handleFontFamily = (event: SelectChangeEvent) => {
    setFontFamily(event.target.value);
  };
  return (
    <div className="bg-[#F9F9F9] w-[420px] h-screen">
      <div className="flex flex-col items-center py-5 font-">
        <Accordion className="w-96">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Title</Typography>
          </AccordionSummary>
          <AccordionDetails className="">
            <Typography className="flex flex-col items-center gap-10">
              <TextField
                className="w-80"
                label="Title"
                type="string"
                variant="outlined"
                size="small"
                onChange={() => console.log("Title")}
              />
              <TextField
                className="w-80"
                label="Line Height"
                type="number"
                variant="outlined"
                size="small"
                onChange={() => console.log("Line Height")}
              />
              <Select
                className="w-80"
                size="small"
                value={fontWeight?.toString()}
                onChange={handleChange}
                variant="outlined"
              >
                {FONTWEIGHTS.map((weight) => (
                  <MenuItem value={weight}>{weight}</MenuItem>
                ))}
              </Select>

              <Select
                className="w-80"
                size="small"
                value={fontFamily}
                onChange={handleFontFamily}
                variant="outlined"
              >
                {FONTFAMILIES.map((font) => (
                  <MenuItem value={font}>{font}</MenuItem>
                ))}
              </Select>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
