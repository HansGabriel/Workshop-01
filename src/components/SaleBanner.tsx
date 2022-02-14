import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Sale } from "../types";

interface SaleBannerProps {
	sale: Sale;
}

export default function SaleBanner({ sale }: SaleBannerProps) {
	const { title, percentage } = sale;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar style={{ background: "#B5111C" }} position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{`${title} -> ${percentage}% off`}
					</Typography>
					<Button color="inherit">{`${percentage}% off`}</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
