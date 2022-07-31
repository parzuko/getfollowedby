import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    as="style"
                    rel="stylesheet preload prefetch"
                    href="/fonts/Alliance_1_Light.otf"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    as="style"
                    rel="stylesheet preload prefetch"
                    href="/fonts/August_Bold.ttf"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                <link href="/favicons/site.webmanifest" rel="manifest" />
                <link
                    href="/favicons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    rel="mask-icon"
                    href="/favicons/safari-pinned-tab.svg"
                    color="#125266"
                />
                <meta name="msapplication-TileColor" content="#125266" />
                <meta name="theme-color" content="#333333" />
                <meta
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                    name="robots"
                />
            </Head>
            <body className="bg-[#0e1116] text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
