import { useCallback, useEffect, useState } from "react";
import Button from "../ui/Button";
import CustomSelect from "../ui/DropDown";

export default function FloatingBar() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    const scrollingDown = currentScrollY > lastScrollY;
    const start = 1200;
    const end = 2000;
    const withinRange = currentScrollY >= start && currentScrollY <= end;
    if (scrollingDown && withinRange) {
      setVisible(true);
    } else if (!scrollingDown) {
      setVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, handleScroll]);

  return (
    <div
      className={`
        fixed bottom-4 max-md:w-full max-md:bottom-0 z-[999] left-1/2 -translate-x-1/2
        transition-all duration-500 ease-in-out shadow-[0_8px_30px_#0000001a];
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <div className="min-w-[700px] max-md:hidden pl-8 pr-4 py-3 flex items-center justify-center bg-white rounded-full shadow-xl">
        <div className="flex items-center w-full justify-between gap-6">
          <div className="flex items-center justify-center gap-3">
            <p className="font-medium text-xl">I am looking for a</p>
            <CustomSelect dropDownClassName="w-[180px]" labelParentClassName="border border-[#ccd1d7] gap-10 hover:border-primary-600 hover:border-[1.5px] px-[30px] py-[15px] rounded-full" value={"Backend"} options={[
              "Backend",
              "Frontend",
              "Fullstack",
              "Mobile",
              "Design",
              "DevOps",
            ]} />
            <p className="font-medium text-xl">expert.</p>
          </div>
          <Button variant="primary">Get started</Button>
        </div>
      </div>
      <div className="shadow-[0_-6px_30px_#0000001a] w-full block bg-white/80 py-4 px-8 backdrop-blur-[10px] md:hidden">
        <Button className="w-full justify-center">Hire an expert</Button>
      </div>

    </div>
  );
}
