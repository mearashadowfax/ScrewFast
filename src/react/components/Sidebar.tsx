import { Button, Tooltip } from "@nextui-org/react";
import type { FC } from "react";
import { menuItems, type MenuItemProps } from '../utils/menuUtils';
import { Link } from "react-router-dom";


const MenuItem: FC<MenuItemProps> = ({ item }) => {
    return (
        <li>
            <Tooltip content={item.label}>
            <Button
            as={Link}
                isIconOnly
                size="md"
                variant="light"
                href={item.href}
                to={item.href}
            >
                {item.Icon}
            </Button>
            </Tooltip>
        </li>
    )
}

const Sidebar: FC = () => {
    const mainMenuItems = menuItems.filter(item => !item.isFooter);
    const footerMenuItems = menuItems.filter(item => item.isFooter);

    return (
        <nav className="bg-default-100 h-screen w-16 flex flex-col justify-between py-4">
            {/* Top section for app icon */}
            <div className="flex justify-center">
                <Button isIconOnly size="lg" variant="light">
                    {/* Replace with your app icon */}
                    <svg className="w-8 h-8 text-default-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </Button>
            </div>

            {/* Center section for main menu items */}
            <ul className="flex flex-col justify-center items-center space-y-2">
                {mainMenuItems.map(item => (
                    <MenuItem key={item.key} item={item} />
                ))}
            </ul>

            {/* Footer section for footer menu items */}
            <ul className="flex mb-4 flex-col items-center space-y-2 justify-center">
                {footerMenuItems.map(item => (
                    <MenuItem key={item.key} item={item} />
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar;