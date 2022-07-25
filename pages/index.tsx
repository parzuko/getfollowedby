import type { NextPage } from "next";

import { Container } from "../components/Container";
import { CTAButtons } from "../components/CTAButtons";
import { FollowedByNav } from "../components/FolowedByNav";
import { GlowingDemoGIF } from "../components/GlowingDemoGIF";

const Home: NextPage = () => {
    return (
        <Container>
            <FollowedByNav />
            <section className="mx-auto mt-10 flex max-w-4xl flex-col justify-center px-8 text-center lg:mt-12">
                <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                    {/* Your AI pair programmer */}
                    Your mutual programmer
                </h2>
                <p className="font-alliance text-md mt-4 px-2 text-stone-400 md:px-14 md:text-lg lg:text-xl">
                    {/* GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor. */}
                    Followed By uses the GitHub Public API to display mutual
                    followers for every profile you visit in real-time, right
                    from your browser.
                </p>

                <CTAButtons />
                <GlowingDemoGIF />
            </section>
        </Container>
    );
};

export default Home;
