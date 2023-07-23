import { Link } from "@/shared/ui/Link/ui";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ISidebarProps } from "./types";

export const Sidebar = ({ setIsMenuToggled }: ISidebarProps) => {
  return (
    <div className="fixed right-0 bottom-0 z-40 w-[300px] h-full bg-primary-100 drop-shadow-xl">
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-400 ml-auto" />
        </button>
      </div>

      <ul className={`ml-[33%] flex gap-10  flex-col justify-start text-2xl`}>
        <Link page="Home"></Link>
        <Link page="Benefits"></Link>
        <Link page="Our Classes"></Link>
        <Link page="Contact Us"></Link>
      </ul>
    </div>
  );
};
