export interface Product {
	key: number;
	title: string;
	price: number;
	image: string;
	description: string;
	markdownPrice?: number;
}

export interface Timer {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface Sale {
	title: string;
	expirationDate: Date;
	products: Product[];
	percentage: number;
}
