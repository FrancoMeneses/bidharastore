import Head from "next/head";
import Topbar from "@/components/topbar";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title = 'Bidhara' }) {
  return(
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content='Venta de Brotes / Microgreens, Flores comestibles, Hojas baby y Microvegetales' />
    </Head>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <main>
      {children}
    </main>
    <Footer></Footer>
  </>
  )
}