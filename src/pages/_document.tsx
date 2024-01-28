import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
