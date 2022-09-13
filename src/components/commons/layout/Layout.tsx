import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
