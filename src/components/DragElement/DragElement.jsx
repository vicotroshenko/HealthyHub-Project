import { useEffect, useRef } from "react"
import css from "./DrageElement.module.css"

export const DragElement = ({ children }) => {

	const containerRef = useRef();
	const dragRef = useRef();
	const isClicked = useRef(false);
	const coords = useRef({
		startX: 0,
		startY: 0,
		lastX: 0,
		lastY: 0,
	})

	useEffect(() => {
		if(!dragRef.current || !containerRef.current) return;
		
		const box = dragRef.current;
		const container = containerRef.current;

		const onMouseDown = (e) => {
			isClicked.current = true;
			coords.current.startX = e.clientX;
			coords.current.startY = e.clientY;
		}

		const onMouseUp = (e) => {
			isClicked.current = false;

			coords.current.lastX = box.offsetLeft;
			coords.current.lastY = box.offsetTop;
		}

		const onMouseMove = (e) => {
			if (!isClicked.current) return;

			const nextX = e.clientX - coords.current.startX + coords.current.lastX;
			const nextY = e.clientY - coords.current.startY + coords.current.lastY;

			box.style.top = `${nextY >= 290 ? 290 : nextY && nextY <= 50 ? 50 : nextY}px`;
			box.style.left = `${nextX <= 50 ? 50 : nextX && nextX >= 660 ? 660 : nextX}px`;
		}

		box.addEventListener("mousedown", onMouseDown);
		box.addEventListener("mouseup", onMouseUp);
		container.addEventListener("mousemove", onMouseMove);
		container.addEventListener("mouseleave", onMouseUp);

		const cleanup = () => {
			box.removeEventListener("mousedown", onMouseDown);
			box.removeEventListener("mouseup", onMouseUp);
			container.removeEventListener("mousemove", onMouseMove);
			container.removeEventListener("mouseleave", onMouseUp);
		}
		return cleanup;
	}, [])
	

	return (
		<div ref={ containerRef } className={css.container}>
			<div ref={ dragRef } className={css.drag_element}>
				{children}
			</div>
		</div>
	)
}