import { otherProjects } from "@/data";
import { HoverEffect } from "./ui/CardHoverEffect";

const OtherProjects = () => {
  return (
    <div className="py-20 w-full" id="otherprojects">
      <h1 className="heading">
        <span className="text-purple">Other Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <HoverEffect items={otherProjects} />
      </div>
    </div>
  );
};

export default OtherProjects;
