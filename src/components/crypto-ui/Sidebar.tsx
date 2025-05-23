import {
  ActivityLogIcon,
  BookmarkIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  CreditCardIcon,
  LandmarkIcon,
  SettingsIcon,
  WalletIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
  {
    name: "portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-5 w-5" />,
  },
  {
    name: "WatchList",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-5 w-5" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-5 w-5" />,
  },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-5 w-5" /> },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-5 w-5" />,
  },
  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-5 w-5" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-5 w-5" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <SettingsIcon className="h-5 w-5" />,
  },
  { name: "Logout", path: "/logout", icon: <ExitIcon className="h-5 w-5" /> },
];
const Sidebar = () => {
  return (
    <div>
      <SheetClose className="w-full flex flex-col gap-2">
        {menu.map((item) => (
          <Button
            key={item.name}
            variant={"outline"}
            className="flex items-center gap-5 py-5  w-full border-2"
          >
            {item.icon}
            <span className="text-lg font-semibold">{item.name}</span>
          </Button>
        ))}
      </SheetClose>
    </div>
  );
};

export default Sidebar;
