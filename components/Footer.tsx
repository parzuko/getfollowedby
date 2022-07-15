import { FollowedByNav } from "./FolowedByNav";

const Footer = () => (
    <footer className="bg-[#13171d] mt-12 flex justify-between items-center py-6 px-6">
        <FollowedByNav isFooter/>
        <span className="font-alliance text-slate-300 text-md md:text-lg">Made for the vibes by @parzuko</span>
    </footer>
);
export { Footer };
