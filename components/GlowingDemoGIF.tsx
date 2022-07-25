import Image from "next/image";

const GlowingDemoGIF = () => (
    <div className="relative mt-12 select-none md:mt-24 lg:mt-20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-md"></div>
        <Image
            className="relative rounded-lg"
            src="/assets/followedby.gif"
            alt="Followed By Extension"
            width={840}
            height={462}
            quality={100}
        />
    </div>
);
export { GlowingDemoGIF };
