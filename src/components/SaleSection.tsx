import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ProductCard from "./ProductCard";
import CountdownTimer from "./CountdownTimer";

import { Sale } from "../types";

interface SaleSectionProps {
	sale: Sale;
}

function SaleSection({ sale }: SaleSectionProps) {
	const { title, expirationDate, products, percentage } = sale;
	return (
		<>
			<Divider
				sx={{
					mx: 10,
					my: 5,
				}}
			/>
			<Stack justifyContent="space-between" mx={10} direction="row" spacing={1}>
				<Typography
					sx={{ fontWeight: "bold" }}
					color={"#3380BF"}
					fontWeight="bold"
				>
					{title} -{`>`} {percentage}% off
				</Typography>
				<CountdownTimer deadline={expirationDate} color={"#3380BF"} />
			</Stack>
			<Container sx={{ py: 8, alignItems: "center" }}>
				{/* End hero unit */}
				<Grid container spacing={1}>
					{products.map((product) => (
						<Grid key={product.key} item xs={12} sm={6} md={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}

export default SaleSection;
