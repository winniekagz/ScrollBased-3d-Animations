export const Hero = () => {
	return (
		<section className="h-screen relative bg-blue-500/10">
			<div className="flex justify-start items-start h-full  w-full">
				<div className="absolute md:top-[40%] md:left-20 top-1/2 transform -translate-y-1/2 md:translate-y-0 z-20  p-4 md:p-0 text-center md:text-left">
					<h1 className="text-3xl md:text-5xl text-gray-800 font-mynerver font-bold">
						Air Not-So-Jordans
					</h1>
					<p className="w-full md:w-[500px] pt-2 text-[#8b9ebb] text-md break-words">
						Introducing the Air Not-So-Jordans - the perfect sneakers
						for those who want to flex on a budget! These shoes may not
						be the real deal, but who needs authenticity when you can
						have imitation? Plus, these babies are so comfortable, you
						won't even notice the difference. They're the kind of shoes
						that make you say, 'Are those Jordans?' and you can
						confidently reply, 'Nah, but they're Air Not-So-Jordans!' So
						go ahead, rock these kicks with pride and let everyone know
						that you're frugal and fashionable all at once.
					</p>

					<button
						onClick={() =>
							alert(
								"I won't take you there; scroll down for yourself. Sheesh!!"
							)
						}
						className="bg-[#192a51] p-2 rounded-lg text-white mt-5 hover:bg-green-500 hover:scale-110 transition duration-500"
					>
						Enlighten Me
					</button>
				</div>
			</div>
		</section>
	);
};
