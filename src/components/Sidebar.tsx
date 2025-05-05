import { Link, useMatch, useNavigate } from "react-router-dom";
import gtiLogo from "../assets/gt-logo.svg";
import { LuContactRound } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsCalendar2Check, BsPeople } from "react-icons/bs";
import { PiGearLight } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

type LinkItem = {
  title: string;
  url: string;
  icon: React.ReactNode
};

function CustomLink({ to, title, icon }: { to: string; title: string, icon: React.ReactNode }) {
  const match = useMatch(to !== "" ? `/dashboard/` + to : "/dashboard/");

  return (
    <Link
      to={`/dashboard/${to}`}
      className={`flex flex-col items-center justify-center w-full space-y-1 py-2 transition-all ${
        match ? "bg-primary text-white" : "bg-transparent text-gray-500"
      }`}
    >
      {/* <div className="h-[30px] w-[30px] border" /> */}
      {icon}
      <p className={`text-[12px] font-light ${match ? "text-white" : "text-gray-500"}`}>
        {title}
      </p>
    </Link>
  );
}

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  const topLinks: LinkItem[] = [
    { title: "Overview", url: "", icon: <IoHomeOutline className="text-[25px]" /> },
    { title: "Appointment", url: "appointment", icon: <BsCalendar2Check className="text-[25px]"/> },
    { title: "Patients", url: "patients", icon: <LuContactRound className="text-[25px]"/> },
    { title: "Staff List", url: "staff", icon: <BsPeople className="text-[25px]"/> },
  ];

  const bottomLinks: LinkItem[] = [
    { title: "Settings", url: "settings", icon: <PiGearLight className="text-[25px]" /> },
    { title: "Logout", url: "__logout__", icon: <LuLogOut className="text-[25px]"/> },
  ];

  return (
    <div className="w-[120px] h-full bg-[#181818] flex flex-col">
      <div>
        <img src={gtiLogo} className="h-[80px]" alt="GTI Logo" />
      </div>
      <div className="grow flex-1 text-white flex flex-col items-center justify-between">
        {/* Top navigation */}
        <div className="flex flex-col mt-[10px] space-y-[10px]">
          {topLinks.map((link, index) => (
            <CustomLink to={link.url} icon={link.icon} key={index} title={link.title} />
          ))}
        </div>

        {/* Bottom navigation (Settings + Logout) */}
        <div className="flex flex-col space-y-[10px] pb-[10px]">
          {bottomLinks.map((link, index) =>
            link.url === "__logout__" ? (
              <button
                key={index}
                onClick={handleLogout}
                className="flex flex-col items-center justify-center w-full space-y-1 py-2 text-gray-500"
              >
                {link.icon}
                <p className="text-[12px] font-light">Logout</p>
              </button>
            ) : (
              <CustomLink to={link.url} key={index} title={link.title} icon={link.icon} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
