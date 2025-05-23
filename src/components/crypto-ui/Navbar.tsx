import { useTheme } from "@/hooks/useTheme";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import icon from "../../assets/polygon.png";
import profileIcon from "../../assets/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Sidebar from "./Sidebar";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="px-2 py-3 border-b z-50 bg-background sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-2 ">
        <Sheet>
          <SheetTrigger>
            <Button
              variant={"ghost"}
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <HamburgerMenuIcon className="h-7 w-7" />
              {/* <DragHandleHorizontalIcon className="h-7 w-7" /> */}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-none flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={icon}
                      alt="Coin icon"
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <span className="text-2xl font-bold text-orange-700">
                      Crypto
                    </span>
                    <span className="text-2xl font-bold text-gray-500">
                      Wave
                    </span>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription></SheetDescription>
              <Sidebar />
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer ">
          <span className="text-2xl font-bold text-orange-700">Crypto</span>
          <span className="text-2xl font-bold text-gray-500">Wave</span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-0 ml-2 ">
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full w-35"
          >
            <MagnifyingGlassIcon className="h-10 w-10" />
            <span className="text-sm font-semibold">Search</span>
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10"
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>

        <div>
          <Avatar className="h-10 w-10">
            <AvatarFallback>CW</AvatarFallback>
            <AvatarImage
              src={profileIcon}
              alt="Coin icon"
              className="rounded-full"
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
