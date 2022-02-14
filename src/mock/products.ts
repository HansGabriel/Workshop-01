import { Product } from "../types";
import Phone from "../images/phone.png";
import Shoe from "../images/shoe.png";
import SmartWatch from "../images/smart-watch.png";
import Watch from "../images/watch.png";

const products: Product[] = [
	{
		key: 1,
		title: "iPhone 13 Pro",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis lectus mauris, vel sollicitudin leo lobortis non. Maecenas efficitur eleifend tristique. Duis pellentesque augue in velit consequat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec leo et mauris condimentum molestie non in mauris. Vestibulum id lobortis ipsum. Sed feugiat vitae turpis nec convallis. Etiam ut mauris ultrices, posuere nisl lacinia, consequat dui. Phasellus laoreet vitae lorem a dapibus. Morbi commodo placerat commodo. Etiam gravida elit non massa dignissim lacinia. Donec ut sem vitae diam rutrum tristique.",
		price: 75000,
		image: Phone,
		markdownPrice: 60000,
	},
	{
		key: 2,
		title: "Shoe",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis lectus mauris, vel sollicitudin leo lobortis non. Maecenas efficitur eleifend tristique. Duis pellentesque augue in velit consequat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec leo et mauris condimentum molestie non in mauris. Vestibulum id lobortis ipsum. Sed feugiat vitae turpis nec convallis. Etiam ut mauris ultrices, posuere nisl lacinia, consequat dui. Phasellus laoreet vitae lorem a dapibus. Morbi commodo placerat commodo. Etiam gravida elit non massa dignissim lacinia. Donec ut sem vitae diam rutrum tristique.",
		price: 5000,
		image: Shoe,
	},
	{
		key: 3,
		title: "Smart Watch",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis lectus mauris, vel sollicitudin leo lobortis non. Maecenas efficitur eleifend tristique. Duis pellentesque augue in velit consequat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec leo et mauris condimentum molestie non in mauris. Vestibulum id lobortis ipsum. Sed feugiat vitae turpis nec convallis. Etiam ut mauris ultrices, posuere nisl lacinia, consequat dui. Phasellus laoreet vitae lorem a dapibus. Morbi commodo placerat commodo. Etiam gravida elit non massa dignissim lacinia. Donec ut sem vitae diam rutrum tristique.",
		price: 25000,
		image: SmartWatch,
		markdownPrice: 20000,
	},
	{
		key: 4,
		title: "Watch",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis lectus mauris, vel sollicitudin leo lobortis non. Maecenas efficitur eleifend tristique. Duis pellentesque augue in velit consequat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec leo et mauris condimentum molestie non in mauris. Vestibulum id lobortis ipsum. Sed feugiat vitae turpis nec convallis. Etiam ut mauris ultrices, posuere nisl lacinia, consequat dui. Phasellus laoreet vitae lorem a dapibus. Morbi commodo placerat commodo. Etiam gravida elit non massa dignissim lacinia. Donec ut sem vitae diam rutrum tristique.",
		price: 3000,
		image: Watch,
	},
];

export default products;
