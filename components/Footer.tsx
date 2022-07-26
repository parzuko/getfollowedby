import { FollowedByNav } from "./FolowedByNav";

const Footer = () => (
    <footer className="bg-[#13171d] mt-12 flex justify-between items-center py-6 px-6">
        <FollowedByNav isFooter />
        <span className="font-alliance text-slate-300 text-sm sm:text-md md:text-lg">
            Made for fun by{" "}
            <a href="https://twitter.com/parzuko" className="hover:text-slate-400" target="_blank">
                {" "}
                @parzuko{" "}
            </a>
        </span>
    </footer>
);
export { Footer };
