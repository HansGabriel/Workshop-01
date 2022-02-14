import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import BreadCrumb from "./components/BreadCrumb";
import SaleSection from "./components/SaleSection";
import SaleBanner from "./components/SaleBanner";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import products from "./mock/products";
import { Sale } from "./types";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://hansdaduya.com/">
				hansdaduya.com
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

const realSale: Sale = {
	title: "Summer Sale",
	expirationDate: new Date("2022-02-25T00:00:00.000Z"),
	products,
	percentage: 30,
};

const summerSale: Sale = { ...realSale };

const autumnSale: Sale = {
	title: "Autumn Sale",
	expirationDate: new Date("2022-03-01T00:00:00.000Z"),
	products,
	percentage: 10,
};

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SaleBanner sale={realSale} />
			<Navbar />
			<Menu />
			<Divider sx={{ mx: 3 }} />

			<BreadCrumb />
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
						mx: 10,
					}}
				>
					<Typography variant="h2" component="h2">
						Flash Sale
					</Typography>
				</Box>
				<SaleSection sale={summerSale} />
				<SaleSection sale={autumnSale} />
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Workshop 01
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Simple React project for our Software Architecture subject
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
