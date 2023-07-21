import SponsorRedBull from "@/shared/assets/SponsorRedBull.png";
import SponsorForbes from "@/shared/assets/SponsorForbes.png";
import SponsorFortune from "@/shared/assets/SponsorFortune.png";

export const Sponsors = () => {
  return (
    <div className="h-[150px]  bg-primary-300 flex items-center">
      <div className="mx-auto px-10 py-10 w-3/5">
        <div className="flex justify-between items-center gap-8">
          <img src={SponsorRedBull} alt="Red Bull Logo" />
          <img src={SponsorFortune} alt="Fortune Logo" />
          <img src={SponsorForbes} alt="Forbes Logo" />
        </div>
      </div>
    </div>
  );
};
