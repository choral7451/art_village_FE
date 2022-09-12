import HeaderContainer from "./header/Header.container";

export default function Layout(props: any) {
  return (
    <>
      <HeaderContainer />
      <div>{props.children}</div>
    </>
  );
}
