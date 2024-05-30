export default function Header() {
  return (
    <header className="flex justify-center items-center  w-full h-48 text-white">
        <div className="flex flex-row justify-between items-center mt-8 w-4/5 border-4 rounded-lg border-blue-400 p-4 pt-6 pb-6 items-center">
            <h1 className="flex leading-none flex-col text-2xl font-bold pt-2">
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </h1>
            <div className="flex flex-col justify-center items-center w-1/5 flex-col bg-white items-center rounded-md  p-4">
                <p className="text-xs mt-[-0.3rem] text-blue-600 font-bold">SCORE</p>
                <p className="text-3xl text-gray-600 mb-[-0.8rem] leading-relaxed mt-1 font-bold">12</p>
            </div>
        </div>
    </header>
  );
}