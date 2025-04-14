import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { green, brown } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0"}}>
      <Stack className="container">PROPERTY LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
