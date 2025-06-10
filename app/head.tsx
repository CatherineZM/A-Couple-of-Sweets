

export default function Head(): JSX.Element {
    <link rel="manifest" href="/manifest.webmanifest" />;

    return (
        <head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <meta name="theme-color" content="#F9F7EF" />
            <meta name="msapplication-navbutton-color" content="#F9F7EF" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link rel="sitemap" href="/sitemap.xml" />
            <link rel="apple-touch-icon" href="/favicon-256.png" />
        </head>
    );
}
