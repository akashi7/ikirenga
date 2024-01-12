/* eslint-disable @next/next/no-img-element */
'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
const Header=()=>{
    'use'
    const [refSlider] = useKeenSlider(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);
    return (
		<div
			className="w-full min-h-[650px] keen-slider"
			id="nav"
			ref={refSlider}
		>
			<div className="keen-slider__slide w-[100%] h-[600px] m-0 border">
				<img
					src={`https://res.cloudinary.com/amatunda/image/upload/v1696176929/6A6A8471_osqfw4.jpg`}
					alt="im"
					className=" object-cover object-center w-full h-[600px]"
				/>
			</div>
		</div>
    );
}
export default Header;