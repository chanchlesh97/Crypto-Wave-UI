import { Avatar } from "@radix-ui/react-avatar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import icon from "../../assets/polygon.png";
import { AvatarImage } from "../ui/avatar";
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

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-2">
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
              <SheetDescription>
                <Sidebar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
