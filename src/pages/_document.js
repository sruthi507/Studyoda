import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/metropolis.min.css" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
