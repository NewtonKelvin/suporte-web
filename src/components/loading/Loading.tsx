import { useEffect, useState } from "react";

const Loading = () => {
	let phrases = [
		"🎨 Embelezando o site...",
		"📊 Consultando o banco de dados...",
		"📈 Otimizando as funcionalidades...",
		"🦠 Travando os servidores...",
		"🤖 Ops . . ."
	];

	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
	const [displayedPhrase, setDisplayedPhrase] = useState("");

	useEffect(() => {
		const phrase = phrases[currentPhraseIndex];

		if (currentLetterIndex < phrase.length) {
			const timer = setTimeout(() => {
				setDisplayedPhrase(
					(prevPhrase) => prevPhrase + phrase[currentLetterIndex]
				);
				setCurrentLetterIndex((prevIndex) => prevIndex + 1);
			}, 100);
			return () => clearTimeout(timer);
		} else if (currentPhraseIndex < phrases.length - 1) {
			setCurrentPhraseIndex((prevIndex) => prevIndex + 1);
			setCurrentLetterIndex(0);
		}
	}, []);
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-900 text-white">
			<div className="w-auto text-left">
				{displayedPhrase.split("...").map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
};

export default Loading;
