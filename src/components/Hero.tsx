export const Hero = () => {
	return (
		<section className="h-screen relative bg-blue-500/10 ">
			<div className="absolute top-[40%] left-20 z-20">
				<h1 className="text-5xl text--800 font-mynerver font-bold">
					Air Not-So-Jordans
				</h1>
				<p className="w-[500px] pt-2 text-[#8b9ebb] text-justify text-sm">
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
							"I wont take you there scroll down for yourself. Sheesh!!"
						)
					}
					className="bg-[#192a51] p-2 rounded-lg text-white mt-5 hover:bg-green-500 hover:scale-110 hover:text-white transition duration-500"
				>
					Enlighten Me
				</button>
			</div>
		</section>
	);
};