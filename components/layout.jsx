import Head from "next/head";
import Topbar from "@/components/topbar";
import Navbar from "./navbar";
import Footer from "./footer";
import ModalCart from "./modalCart";
import ResumeCart from "./resumeCart";
import WhatsApp from "./whatsApp";

export default function Layout({ children, title, description = 'Venta de Flores comestibles, Brotes o Microgreens, Hojas baby y Microvegetales para tus mejores platillos, cocina experimental o mixología.', image='https://res.cloudinary.com/dfnqqumsc/image/upload/v1686257680/Bidhara/products/shared/General.png', url }) {

  return(
  <>
    <Head>
      <meta charset="utf-8"/>
      <title>{title}</title>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>


      <meta property="og:type" content="website"/>
      <meta property="og:url" content={url}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={url}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={image}></meta>


    </Head>
    <ModalCart></ModalCart>
    <ResumeCart></ResumeCart>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <WhatsApp></WhatsApp>
    <main>
      {children}
    </main>
    <Footer></Footer>
  </>
  )
}