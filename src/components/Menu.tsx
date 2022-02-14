import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const menus = [
	"Home",
	"Cart",
	"Checkout",
	"Flash Sales",
	"My account",
	"Sample Page",
	"Shop",
];

export default function AccountMenu() {
	return (
		<>
			<Stack
				sx={{
					display: "flex",
					alignItems: "center",
					textAlign: "center",
					my: 5,
					mx: 10,
				}}
				direction={{ xs: "column", sm: "row" }}
				spacing={{ xs: 1, sm: 5 }}
			>
				{menus.map((menu) => (
					<Typography key={menu}>{menu}</Typography>
				))}
			</Stack>
		</>
	);
}
