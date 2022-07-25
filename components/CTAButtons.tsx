interface ButtonProps {
    isPrimary?: boolean;
    href: string;
    ctaText: string;
}
const Button = ({ isPrimary = false, href, ctaText }: ButtonProps) => {
    const contextBasedStyle = isPrimary
        ? `bg-gray-100 hover:bg-gray-200 text-[#0E1116]`
        : `bg-[#0E1116] border border-gray-400 hover:border-gray-200`;
    return (
        <a
            href={href}
            target="_blank"
            className={`mt-3 inline-block rounded-md  px-4 py-3 text-lg font-bold hover:cursor-pointer sm:px-6 md:px-8 md:text-xl ${contextBasedStyle}`}
        >
            {ctaText}
        </a>
    );
};

const CTAButtons = () => (
    <div className="flex flex-col sm:flex-row justify-center sm:space-x-3 mt-6 select-none">
        <Button
            href="/download/chrome"
            isPrimary
            ctaText="Add to Browser"
        />
        <Button
            href="/code"
            ctaText="Source Code"
        />
    </div>
);
export { CTAButtons };
