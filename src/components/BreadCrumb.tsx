import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" onClick={handleClick}>
			<Stack direction="row">
				<HomeIcon />
				<Typography sx={{ ml: 1 }}>Home</Typography>
			</Stack>
		</Link>,
		<Typography key="3" color="text.primary">
			Flash Sales
		</Typography>,
	];

	return (
		<Stack
			sx={{
				mt: 2,
				mx: 10,
			}}
			spacing={2}
		>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label="breadcrumb"
			>
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}
