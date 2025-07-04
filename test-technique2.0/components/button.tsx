interface ButtonProps {
text: string;
}

export default function Button( {text} : ButtonProps ) {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {text}
    </button>
  );
}