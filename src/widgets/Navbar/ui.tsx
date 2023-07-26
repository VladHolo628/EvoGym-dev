import { useState } from "react";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "@/shared/ui/Link/ui";
import { ActionButton } from "@/shared/ui/ActionButton";
import { Sidebar } from "./components/Sidebar/ui";
import Logo from "@/shared/assets/Logo.png";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isTopOfPage = usePageControlStore((state) => state.isTopOfPage);

  const flexBetween = "flex items-center justify-between";
  const navigationBackground = `${
    isTopOfPage ? "" : "bg-primary-100 dropshadow"
  }`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${navigationBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home"></Link>
                  <Link page="Benefits"></Link>
                  <Link page="Our Classes"></Link>
                  <Link page="Contact Us"></Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link page="Sign In" />
                  <ActionButton>Become a member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white " />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <Sidebar setIsMenuToggled={setIsMenuToggled} />
      )}
    </nav>
  );
};
