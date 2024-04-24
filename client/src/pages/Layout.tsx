import { Outlet } from "react-router-dom";
import Auth from "../components/Auth";
import ModalProvider from "../components/ModalProvider";
import PageHeader from "../components/PageHeader";
import CartProvider from "../components/CartProvider";
import Modals from "../components/Modals";

const Layout = () => {
  return (
    <Auth>
      <ModalProvider>
        <CartProvider>
          <PageHeader />

          <Modals />

          <main>
            <Outlet />
          </main>
        </CartProvider>
      </ModalProvider>
    </Auth>
  );
};

export default Layout;
