import { useAuth } from "@/context/authContext";
import { useChatContext } from "@/context/chatContext";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

/**
 * Renders the chat component with header, messages, and footer.
 * @returns {JSX.Element} The chat component.
 */
const Chat = () => {
    const { data, users } = useChatContext();
    const { currentUser } = useAuth();

    const isUserBlocked = users[currentUser.uid]?.blockedUsers?.find(
        (u) => u === data.user.uid
    );

    const IamBlocked = users[data.user.uid]?.blockedUsers?.find(
        (u) => u === currentUser.uid
    );

    return (
        <div className="flex flex-col p-5 grow">
            <ChatHeader />
            {data.chatId && (
                <>
                    <Messages />
                    {!isUserBlocked && !IamBlocked && <ChatFooter />}

                    {isUserBlocked && (
                        <div className="w-full text-center text-c3 py-5">
                            This user has been blocked
                        </div>
                    )}

                    {IamBlocked && (
                        <div className="w-full text-center text-c3 py-5">
                            {`${data.user.displayName} has blocked you!`}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Chat;
