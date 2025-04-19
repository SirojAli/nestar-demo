import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";
import { Box, Container, Stack } from "@mui/material";

const Community: NextPage = () => {
	return (
		<div style={{ margin: "20px 0" }}>
			<Stack className="container">COMMUNITY</Stack>
		</div>
	);
};

export default withLayoutBasic(Community);
