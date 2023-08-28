/**
 * Messages component displays the messages of a chat.
 * @module Messages
 */

import { useAuth } from "@/context/authContext";
import { useChatContext } from "@/context/chatContext";
import { db } from "@/firebase/firebase";
import {
    DELETED_FOR_ME
} from "@/utils/constants";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";

/**
 * @function Messages
 * @returns {JSX.Element} Messages component
 */
const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data, setIsTyping } = useChatContext();
    const { currentUser } = useAuth();
    const ref = useRef();

    /**
     * @function scrollToBottom
     * @description Scrolls to the bottom of the chat container
     */
    const scrollToBottom = () => {
        const chatContainer = ref.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    useEffect(() => {
        /**
         * @function unsub
         * @description Unsubscribes from the onSnapshot listener
         */
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            if (doc.exists()) {
                setMessages(doc.data().messages);
                setIsTyping(doc.data()?.typing?.[data.user.uid] || false);
            }
            setTimeout(() => {
                scrollToBottom();
            }, 0);
        });

        return () => unsub();
    }, [data.chatId, data.user.uid, setIsTyping]);


    return (
        <div
            ref={ref}
            className="grow p-5 overflow-auto scrollbar flex flex-col"
        >
            {messages
                ?.filter(
                    (m) =>
                        m?.deletedInfo?.[currentUser.uid] !== DELETED_FOR_ME &&
                        !m?.deletedInfo?.deletedForEveryone &&
                        !m?.deleteChatInfo?.[currentUser.uid]
                )
                ?.map((m) => {
                    return <Message message={m} key={m.id} />;
                })}
        </div>
    );
};

export default Messages;
