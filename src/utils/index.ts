import { Timer } from "../types";

export const toTwoDecimalPlaces = (num: number): string => {
	return `₱${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export const timeConverter = (time: number): Timer => {
	const days = Math.floor(time / 86400);
	const hours = Math.floor((time % 86400) / 3600);
	const minutes = Math.floor(((time % 86400) % 3600) / 60);
	const seconds = Math.floor(((time % 86400) % 3600) % 60);

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};

export const getDifferenceInSeconds = (date1: Date, date2: Date): number => {
	return Math.abs(date1.getTime() - date2.getTime()) / 1000;
};

export const createTimer = (time: Date): Timer => {
	const difference = getDifferenceInSeconds(new Date(), time);
	return timeConverter(difference);
};
