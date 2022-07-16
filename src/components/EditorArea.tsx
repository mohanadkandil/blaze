import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { MdOutlineFileDownload } from "react-icons/all";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Share from "@mui/icons-material/Share";
import TextField from "@mui/material/TextField";

export const EditorArea = () => {
  return (
    <div className="w-full">
      <div className="w-full h-20 bg-[#F9F9F9]">
        <div className="flex justify-between items-center p-5">
          <div>
            <TextField
              className="w-80"
              label="Image Name"
              type="string"
              variant="outlined"
              size="small"
              onChange={() => console.log("Title")}
            />
          </div>
          <div className="flex">
            <div className="px-2">
              <Button
                variant="contained"
                color="info"
                endIcon={<FileDownloadIcon />}
              >
                Downlaod
              </Button>
            </div>
            <div className="px-2">
              <Button variant="contained" color="info" endIcon={<Share />}>
                Share Image
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-[calc(100%-5rem)] items-center">
        <div className="bg-black w-[1200px] h-[630px]">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};
