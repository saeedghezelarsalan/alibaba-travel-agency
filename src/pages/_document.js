import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "fa" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;