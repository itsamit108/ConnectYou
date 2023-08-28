import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-c1">
            <div className="flex flex-col items-center px-4">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold">
                        Welcome to ConnectYou 👋
                    </div>
                    <div className="mt-3 text-c3">
                        Discover a new way to connect and chat with others.
                        Join our vibrant community today.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full mt-10 mb-5">
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 rounded-md cursor-pointer p-[1px] transition duration-300 transform hover:scale-105">
                        <Link href="/login">
                            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
                                Log In
                            </div>
                        </Link>
                    </div>
                    <div className="w-2 h-2 md:hidden"></div> {/* Adding a 2-unit gap for mobile */}
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 rounded-md cursor-pointer p-[1px] transition duration-300 transform hover:scale-105">
                        <Link href="/register">
                            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
                                Sign Up
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-c3">
                    <p>Explore our exciting features:</p>
                    <ul className="list-disc list-inside">
                        <li>Connect with friends and family effortlessly.</li>
                        <li>Share your thoughts and ideas with others.</li>
                        <li>Discover new friends and connections.</li>
                        <li>And many more!</li>
                    </ul>
                </div>
                <div className="w-full h-px mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
            </div>
        </div>
    );
};

export default LandingPage;
