import { ChevronDown, Globe, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Dropdown from "../ui/HoverDropDown";
import { NavItems } from "../../data/data";
import Logo from "../../assets/Logo";
import CustomSelect from "../ui/DropDown";
import MobileAccordion from "./MobileAccordion";

export default function Navbar() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY <= 10);
            if (currentScrollY < lastScrollY) {
                if (currentScrollY > 50) {
                    setIsFixed(true);
                    setIsVisible(true);
                }
            }
            else {
                setIsVisible(false);
                setIsFixed(false);
            }
            if (currentScrollY <= 10) {
                setIsFixed(false);
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            {!mobileOpen && <nav
                className={`
    w-full fixed z-50 transition-all duration-300
    ${isFixed ? "top-0 left-0 shadow-md" : "absolute"}
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
    ${isAtTop ? "bg-transparent" : "bg-white"}
  `}
            >
                <div className="container max-md:px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <Logo fill={isAtTop ? "white" : "#15172F"} />

                        <ul className="hidden lg:flex text-sm font-semibold items-center gap-4">
                            {NavItems.map(({ type, label, services }) =>
                                type === "text" ? (
                                    <li
                                        key={label}
                                        className={`cursor-pointer ${isAtTop
                                            ? "text-white hover:text-purple-200"
                                            : "text-black hover:text-purple-600"
                                            }`}
                                    >
                                        {label}
                                    </li>
                                ) : (
                                    <Dropdown key={label} label={label} items={services} flag={isAtTop} />
                                )
                            )}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <ul className="hidden lg:flex text-sm font-semibold items-center gap-4">
                            <li
                                className={`flex cursor-pointer items-center gap-1 ${isAtTop
                                    ? "text-white hover:text-purple-200"
                                    : "text-black hover:text-purple-600"
                                    }`}
                            >
                                Apply as developer <SquareArrowOutUpRight className="w-4" />
                            </li>

                            <li>
                                <Button variant={isAtTop ? "secondary" : "terinary"}>
                                    Find a developer
                                </Button>
                            </li>

                            <li>
                                <Button variant={isAtTop ? "outlineWhite" : "outlineBlack"}>
                                    Login
                                </Button>
                            </li>

                            <li>
                                <CustomSelect
                                    options={["England", "UK"]}
                                    label={
                                        <div className="flex gap-2 items-center hover:bg-[#fff3] rounded-2xl p-1 transition">
                                            <Globe className={isAtTop ? "text-white" : "text-black"} />
                                            <ChevronDown
                                                size={20}
                                                className={isAtTop ? "text-white" : "text-black"}
                                            />
                                        </div>
                                    }
                                />
                            </li>
                        </ul>
                        <div className="lg:hidden flex items-center gap-3">
                            <CustomSelect
                                options={["England", "UK"]}
                                label={
                                    <div className="flex gap-2 items-center hover:bg-[#fff3] rounded-2xl p-1 transition">
                                        <Globe className={isAtTop ? "text-white" : "text-black"} />
                                        <ChevronDown
                                            size={20}
                                            className={isAtTop ? "text-white" : "text-black"}
                                        />
                                    </div>
                                }
                            />

                            <button onClick={() => setMobileOpen(true)}>
                                <Menu className={isAtTop ? "text-white" : "text-black"} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>}
            {mobileOpen && <div
                className={`
    fixed inset-0 w-full z-50 bg-white transition-transform duration-300
    ${mobileOpen ? "-translate-y-0" : "-translate-y-full"}
  `}
            >
                <div className="container max-md:px-4">
                    <div className="py-4 flex justify-between items-center">
                        <Logo fill={"#15172F"} />
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <CustomSelect
                                    options={["England", "UK"]}
                                    label={
                                        <div className="flex gap-2 items-center hover:bg-[#fff3] rounded-2xl p-1 transition">
                                            <Globe className={"text-black"} />
                                            <ChevronDown
                                                size={20}
                                                className={"text-black"}
                                            />
                                        </div>
                                    }
                                />
                                <button onClick={() => setMobileOpen(false)}>
                                    <X className={"text-black"} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 flex flex-col">
                        <ul className="text-sm font-semibold items-center gap-4 flex flex-col w-full">
                            {NavItems.map(({ type, label, services }) =>
                                type === "text" ? (
                                    <li
                                        key={label}
                                        className={`cursor-pointer w-full text-left`}
                                    >
                                        {label}
                                    </li>
                                ) : (
                                    <Dropdown key={label} label={label} items={services}/>
                                )
                            )}
                        </ul>
                        <div className="border-t gap-4 flex flex-col">
                            <div className="flex items-center gap-2 mt-4 font-semibold">
                                Apply as a developer <SquareArrowOutUpRight className="w-4" />
                            </div>
                            <div className="flex justify-between">
                            <Button className="w-[48%] justify-center" variant="outlineBlack">
                                Log in
                            </Button>

                            <Button className="w-[48%] justify-center" variant="terinary">
                                Find a developer
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>

    );
}
