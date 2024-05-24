import SideBarWrapper from "../../components/shared/sidebar/SideBarWrapper";



export default function Layout({ children }) {
  return (
    <SideBarWrapper>
        {children}
    </SideBarWrapper>
  );
}
