import Logo from "@/shared/assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content w-5/6 mx-auto gap-16 md:flex">
        <div className="basis-1/2">
          <img src={Logo} alt="Evo Gym Logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="py-10 md:py-0">
          <h4 className="font-bold font-montserrat mb-5">Links</h4>
          <ul className="gap-2 flex flex-col">
            <li className="hover:text-primary-500 cursor-pointer">Twitter</li>
            <li className="hover:text-primary-500 cursor-pointer">Facebook</li>
            <li className="hover:text-primary-500 cursor-pointer">Snapchat</li>
          </ul>
        </div>
        <div className="py-10 md:py-0">
          <h4 className="font-bold font-montserrat mb-5">Contacts</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};
