import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import Button, { ButtonProps } from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Color from "color";
import { Product } from "../types";

import { toTwoDecimalPlaces } from "../utils";

interface ProductCardProps {
	product: Product;
}

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	"&:hover": {
		backgroundColor: red[700],
	},
}));

export default function ProductCard({ product }: ProductCardProps) {
	const { title, description, price, image, markdownPrice } = product;
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const computedPrice = markdownPrice ? (
		<Stack direction="row" spacing={1}>
			<Typography style={{ color: "#000000" }}>Price:</Typography>
			<Typography
				style={{
					textDecorationLine: "line-through",
					color: Color("#000000").alpha(0.5).lighten(0.8).string(),
				}}
			>
				{toTwoDecimalPlaces(price)}
			</Typography>
			<Typography style={{ color: "#000000" }}>
				{toTwoDecimalPlaces(markdownPrice)}
			</Typography>
		</Stack>
	) : (
		<Typography>Price: {toTwoDecimalPlaces(price)}</Typography>
	);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={computedPrice}
			/>
			<CardMedia component="img" height="194" image={image} alt="Paella dish" />
			<CardActions disableSpacing>
				<ColorButton variant="contained">Check Sale!</ColorButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>{description}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
