import { Container } from "components/Container/Container";
import { StatisticShow } from "components/StatisticShow/StatisticShow";
import { useRef } from "react";


const Statistic = () => {
	const containerRef = useRef();
	return (
		<Container >
			<div ref={containerRef} style={{width: "100%"}}>
				<StatisticShow containerRef={containerRef}/>
			</div>
		</Container>
	)
}

export default Statistic;