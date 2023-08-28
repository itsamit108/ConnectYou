import Image from "next/image";

/**
 * Avatar component displays a user's profile picture or initials with a colored background.
 * @param {Object} props - The component props.
 * @param {string} props.size - The size of the avatar. Can be "small", "medium", "large", "x-large", or "xx-large".
 * @param {Object} props.user - The user object containing user information such as displayName, photoURL, and color.
 * @param {Function} props.onClick - The function to be called when the avatar is clicked.
 * @returns {JSX.Element} - The Avatar component UI.
 */
const Avatar = ({ size, user, onClick }) => {
    const s =
        size === "small"
            ? 32
            : size === "medium"
                ? 36
                : size === "x-large"
                    ? 56
                    : size === "xx-large"
                        ? 96
                        : 40;
    const c =
        size === "small"
            ? "w-8 h-8"
            : size === "medium"
                ? "w-9 h-9"
                : size === "large"
                    ? "w-10 h-10"
                    : size === "x-large"
                        ? "w-14 h-14"
                        : "w-24 h-24";
    const f =
        size === "x-large"
            ? "text-2xl"
            : size === "xx-large"
                ? "text-4xl"
                : "text-base";
    return (
        <div
            className={`${c} rounded-full flex items-center justify-center text-base flex-shrink-0 relative`}
            style={{ backgroundColor: user.color }}
            onClick={onClick}
        >
            {user?.isOnline && (
                <>
                    {size === "large" && (
                        <span className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-[2px] right-[2px] " />
                    )}
                    {size === "x-large" && (
                        <span className="w-[12px] h-[12px] bg-green-500 rounded-full absolute bottom-[3px] right-[3px] " />
                    )}
                </>
            )}

            {user.photoURL ? (
                <div className={`${c} overflow-hidden rounded-full`}>
                    <Image
                        width={s}
                        height={s}
                        src={user.photoURL}
                        alt={`${user.displayName}'s Profile Picture`}
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            ) : (
                <span className={`uppercase font-semibold ${f}`}>
                    {user.displayName?.charAt(0)}
                </span>
            )}
        </div>
    );
};

export default Avatar;
