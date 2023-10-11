import { StatisticShow } from "components/StatisticShow/StatisticShow";
import { useRef } from "react";


const Statistic = () => {
	const containerRef = useRef();
	return (
		<section  ref={containerRef} style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
			<StatisticShow containerRef={containerRef}/>
		</section>
	)
}

export default Statistic;