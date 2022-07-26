import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "./Footer";

const Container = props => {
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: "Followed By",
        description: `Followed By uses GitHub’s public API to fetch mutual followers for every profile you visit, straight to the profile page!`,
        image: "https://getfollowedby.xyz/assets/SEO.png",
        type: "website",
        ...customMeta,
    };
    return (
        <>
            <main className="flex min-h-[85vh] md:min-h-[93vh] xl:min-h-[90vh] flex-col">
                <Head>
                    <title>{meta.title}</title>
                    <meta name="robots" content="follow, index" />
                    <meta content={meta.description} name="description" />
                    <meta
                        property="og:url"
                        content={`https://getfollowedby.xyz${router.asPath}`}
                    />
                    <link
                        rel="canonical"
                        href={`https://getfollowedby.xyz${router.asPath}`}
                    />
                    <meta property="og:type" content={meta.type} />
                    <meta property="og:site_name" content="Followed By" />
                    <meta
                        property="og:description"
                        content={meta.description}
                    />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@parzuko" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta
                        name="twitter:description"
                        content={meta.description}
                    />
                    <meta name="twitter:image" content={meta.image} />
                    {meta.date && (
                        <meta
                            property="article:published_time"
                            content={meta.date}
                        />
                    )}
                </Head>
                {children}
            </main>
            <Footer />
        </>
    );
};
export { Container };
