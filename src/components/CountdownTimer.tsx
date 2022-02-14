import { useState, useEffect } from "react";
import { createTimer } from "../utils";

interface CountdownTimerProps {
	deadline: Date;
	[key: string]: any;
}

function CountdownTimer({ deadline, color, fontWeight }: CountdownTimerProps) {
	const [time, setTime] = useState(createTimer(deadline));

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(createTimer(deadline));
		}, 1000);
		return () => clearInterval(timer);
	}, [deadline]);

	return (
		<div style={{ color, fontWeight }}>
			{time.days} days {time.hours} hours {time.minutes} minutes {time.seconds}{" "}
			seconds
		</div>
	);
}

export default CountdownTimer;
