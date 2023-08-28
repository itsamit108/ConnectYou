/**
 * Menu component that displays a list of options for a message.
 * @param {Object} props - The component props.
 * @param {boolean} props.self - Indicates if the message is sent by the user.
 * @param {function} props.setShowMenu - Function to set the state of the menu visibility.
 * @param {boolean} props.showMenu - Indicates if the menu is visible.
 * @param {function} props.setShowDeletePopup - Function to set the state of the delete popup visibility.
 * @param {function} props.editMsg - Function to edit the message.
 * @returns {JSX.Element} - The Menu component.
 */
import { useEffect, useRef } from "react";
import ClickAwayListener from "react-click-away-listener";

const Menu = ({ self, setShowMenu, showMenu, setShowDeletePopup, editMsg }) => {
    const ref = useRef();

    useEffect(() => {
        ref?.current?.scrollIntoViewIfNeeded();
    }, [showMenu]);

    const handleClickAway = () => {
        setShowMenu(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                ref={ref}
                className={`w-[200px] absolute top-8 bg-c0 z-10 rounded-md overflow-hidden ${
                    self ? "right-0" : "left-0"
                }`}
            >
                <ul className="flex flex-col py-2">
                    {self && (
                        <li
                            className="flex items-center py-3 px-5 hover:bg-black cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                editMsg();
                                setShowMenu(false);
                            }}
                        >
                            Edit message
                        </li>
                    )}
                    <li
                        className="flex items-center py-3 px-5 hover:bg-black cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDeletePopup();
                        }}
                    >
                        Delete message
                    </li>
                </ul>
            </div>
        </ClickAwayListener>
    );
};

export default Menu;
