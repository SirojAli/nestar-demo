import React from "react";
import { Box, Stack, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentCard = () => {
  return (
      <Stack className={"card"}>
          <Box className={"image-box"}>
              <img src="/img/profile/girl.svg" alt="" className={"image"} />
          </Box>
          <Box className={"info"}>
              <strong className={"name"}>Martin</strong>
              <p className={"role"}>Agent</p>
          </Box>
      </Stack>
  );
};

export default TopAgentCard;
