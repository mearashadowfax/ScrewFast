import type { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GoHubot } from "react-icons/go";
import { IoMdContrast } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { TbSitemap } from "react-icons/tb";
import Home from "../pages/home";
import Hubs from "../pages/hubs";
import Funnels from "../pages/funnels";
import Bulk from "../pages/bulk";

const iconSize = 28;

export interface MenuItemProps {
    item: MenuItemType
}

export type MenuItemType = {
    key: string,
    label: string,
    Icon: ReactNode,
    href: string,
    isFooter: boolean,
    element: ReactNode  // Nuevo campo para el componente de la página
}

export const menuItems: MenuItemType[] = [
    {
        key: 'home',
        label: 'Home',
        Icon: <AiOutlineHome size={iconSize} />,
        href: '/app',
        isFooter: false,
        element: <Home />
    },
    {
        key: 'hubs',
        label: 'Hubs',
        Icon: <GoHubot size={iconSize} />,
        href: '/app/hubs',
        isFooter: false,
        element: <Hubs />
    },
    {
        key: 'funnels',
        label: 'Funnels',
        Icon: <TbSitemap size={iconSize} />,
        href: '/app/funnels',
        isFooter: false,
        element: <Funnels />
    },
    {
        key: 'bulk-messages',
        label: 'Bulk Messages',
        Icon: <BiMessageRoundedDots size={iconSize} />,
        href: '/app/bulk-messages',
        isFooter: false,
        element: <Bulk />
    },
    {
        key: 'change-theme',
        label: 'Change Theme',
        Icon: <IoMdContrast size={iconSize}/>,
        href: '#',
        isFooter: true,
        element: null  // No tiene una página asociada
    },
    {
        key: 'change-language',
        label: 'Change Language',
        Icon: <MdOutlineLanguage size={iconSize}/>,
        href: '#',
        isFooter: true,
        element: null  // No tiene una página asociada
    }
];
