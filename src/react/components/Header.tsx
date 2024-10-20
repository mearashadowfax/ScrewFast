import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Dropdown, DropdownTrigger, User, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Header = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>)
}
export default Header;