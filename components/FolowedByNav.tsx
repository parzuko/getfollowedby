interface FollowedByNavProps {
    isFooter?: boolean;
}
const FollowedByNav = ({ isFooter = false }: FollowedByNavProps) => {
    const textSizeStyle = isFooter
        ? `text-3xl sm:text-4xl`
        : `p-4 text-4xl sm:p-6 sm:text-5xl md:p-8 md:text-6xl`;
    const iconSizeStyle = isFooter
        ? `h-8 w-8 sm:h-9 sm:h-9  md:h-10 md:w-10`
        : `h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12`;
    return (
        <nav className={`font-august flex items-center ${textSizeStyle}`}>
            <div
                className={`mr-3 bg-white bg-gradient-to-b from-blue-400 to-violet-600 rounded-md ${iconSizeStyle}`}
            ></div>
            Followed By
        </nav>
    );
};
export { FollowedByNav };
