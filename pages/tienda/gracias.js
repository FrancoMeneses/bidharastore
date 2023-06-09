import Layout from "@/components/layout"
import { StoreContext } from "@/context/store"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export default function ThankYou() {

  const titlePage = `Gracias | Bidhara`
  const descPage = ``
  const imgUrl = ''
  const urlPage = `https://bidharamexico.com/tienda/gracias`

  const { handleThanks, cart } = useContext(StoreContext)
  const router = useRouter()

  useEffect(() => {
    if(cart.length === 0){
      router.push('/')
    }
  },[cart])

  return (
    <Layout title={titlePage} url={urlPage}>
      <main className="flex flex-col px-2 justify-center items-center w-full min-h-screen font-text">
        <section className="flex flex-col min-h-screen justify-around items-center w-full max-w-5xl">
          <h1 className="font-semibold text-[23px] text-center lg:text-[25px]">
            ¡Gracias por seleccionar tus productos!
          </h1>
          <h2 className="text-[22px] text-justify lg:text-[24px]">
            Si necesitas información adicional a tu pedido o tienes alguna pregunta, no dudes en aclararla en el chat de WhatsApp.
          </h2>
          <h2 className="text-[22px] text-justify lg:text-[24px]">
            ¿Quieres seguir navegando nuestra página y conservar tu carrito, datos de envío y contacto para hacer otro pedido o deseas eliminar la información y tu carrito?
          </h2>
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <button id='tks-save' type="button" className="text-[18px] flex-no-shrink bg-[#0495A8] text-center py-2 w-[200px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]" onClick={handleThanks}>Conservar </button>
            <button id='tks-delete' type="button" className="text-[18px] flex-no-shrink bg-[#0495A8] text-center py-2 w-[200px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]" onClick={handleThanks}>Eliminar</button>
          </div>
        </section>
      </main>
    </Layout>
  )
}