import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { green, brown } from "@mui/material/colors";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const PropertyDetail = () => {
	const device = useDeviceDetect();

	if (device === "mobile") {
		return <Stack>PROPERTY DETAIL MOBILE</Stack>;
	} else {
		return (
			<>
				<Container>PROPERTY DETAIL</Container>
			</>
		);
	}
};

export default withLayoutBasic(PropertyDetail);
