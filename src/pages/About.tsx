import { Info, Briefcase, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="p-6 pt-6 min-h-full space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <Info className="w-8 h-8 text-[#FACC15]" />
          About OCReels
        </h1>
        <p className="text-lg text-muted-foreground">
          The ultimate hub for high-stakes entertainment. We connect the world's most passionate players with elite casino offers, exclusive rewards, and a premium community experience.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-xl border border-border shadow-lg bg-card overflow-hidden">
          <div className="p-6 pb-2">
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground">
              <Briefcase className="w-5 h-5 text-[#FACC15]" />
              Ownership
            </h3>
          </div>
          <div className="p-6 pt-0 text-muted-foreground space-y-4 text-sm md:text-base">
            <p>OCReels.com is owned and operated by:</p>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <span className="font-semibold text-foreground text-lg block">Lonepath Holdings LLC</span>
                <span className="block mt-1">Registration number: L 24160</span>
              </div>
              <div className="pt-1">
                <span className="font-semibold text-foreground block mb-2">Registered address:</span>
                <span className="block">Jessups Estate</span>
                <span className="block">P.O. Box 590</span>
                <span className="block">Nevis</span>
                <span className="block">Saint Kitts and Nevis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border shadow-lg bg-card overflow-hidden">
          <div className="p-6 pb-2">
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground">
              <ShieldCheck className="w-5 h-5 text-[#FACC15]" />
              Vision
            </h3>
          </div>
          <div className="p-6 pt-0 text-muted-foreground space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Our vision was to create a short-video platform for listing and discovering online casinos that is as fair and honest as possible for players.
            </p>
            <p>
              On OCReels, players themselves can freely rate and review casinos based on their own real experiences, helping other users make better and safer choices.
            </p>
            <p>
              We came to the conclusion that gambling itself should not be erased or denied. It has been part of human culture and history in different forms for thousands of years. However, we also recognize that some online casinos can behave unfairly or dishonestly toward players.
            </p>
            <p>
              Because of this, we decided to build a platform that puts fairness, transparency, and community feedback first. Our goal is to make it easier for players to find trustworthy casinos and avoid dishonest operators.
            </p>
            <div className="pt-4 border-t border-border mt-4">
              <p>
                If you have any questions, feedback, or concerns, please contact us at:
              </p>
              <a href="mailto:hey@ocreels.com" className="text-[#FACC15] hover:underline mt-1 inline-block font-medium">hey@ocreels.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
