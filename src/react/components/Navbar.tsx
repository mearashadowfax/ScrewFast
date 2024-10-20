import { NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Button, Popover, PopoverTrigger, Badge, PopoverContent, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, NavbarMenu, NavbarMenuItem, Navbar, Link } from "@nextui-org/react";
import Header from "./Header";
import { menuItems } from "../utils/menuUtils";

const Navigationbar = () => {
    return (
       <div className="flex justify-between">
         <Navbar
            classNames={{
                base: "lg:bg-transparent lg:backdrop-filter-none",
                item: "data-[active=true]:text-primary",
                wrapper: "px-4 sm:px-6",
            }}
            height="60px"
        >
            <NavbarBrand>
                <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map(item=>(<div>
                    <NavbarMenuItem key={item.key}>
                        <Link 
                            className="w-full flex items-center gap-2" 
                            href={item.href}
                        color="foreground"
                        >
                            {item.Icon}
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                </div>))}
            </NavbarMenu>
        </Navbar>
        <Header/>
       </div>
    );
}
export default Navigationbar;