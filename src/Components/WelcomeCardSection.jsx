import WelcomeCardSlidesMotion from "./WelcomeCardSlidesMotion";

export default function WelcomeCardSection() {
  return (
    <div className="hidden lg:flex lg:flex-col justify-center items-center">
      <div className="-ml-12">
        <h3 className="text-4xl text-color5 font-semibold">
          Welcome to SkyQuest!
        </h3>
        <p className="text-sm mt-3 text-color2">
          Discover Your Next Adventure with SkyQuest: Your Ultimate Flight
          Search Companion!
        </p>
        <p className="mt-10 text-sm text-color1">
          Enjoy intuitive search, personalized recommendations, and real-time
          updates for seamless travel. Whether it's a vacation, business trip,
          or spontaneous adventure, SkyQuest has you covered in the skies.
        </p>
      </div>
      <div>
        <WelcomeCardSlidesMotion />
      </div>
    </div>
  );
}
