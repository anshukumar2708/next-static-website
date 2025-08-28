export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl mt-2">Page Not Found</h2>
            <p className="mt-4 text-gray-600">
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Go Home
            </a>
        </div>
    );
}
