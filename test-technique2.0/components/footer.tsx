export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
            Test technique  &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}