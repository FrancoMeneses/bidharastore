import connectMongo from 'utils/connectMongo'
import Test2 from '@/models/testmodel'
import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import Productcard from "@/components/productcard"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "@/context/store"

export default function BrotesMicrogreens({ products }) {

  const titlePage = 'Proveedor de Brotes Comestibles - Microgreens | Bidhara'
  const descPage = 'Venta de Brotes Comestibles o Microgreens, somos proveedores para tus eventos importantes, platillos únicos, cocina experimental o mixología.'
  const imgUrl = 'https://res.cloudinary.com/dfnqqumsc/image/upload/v1686244076/Bidhara/products/shared/BrotesComestibles.png'
  const urlPage = 'https://bidharamexico.com/tienda/brotes-microgreens'

  const { setAllproducts, setOpenSidebar } = useContext(StoreContext)

  const [pageProducts, setPageProducts] = useState([])

  useEffect(() => {
    setOpenSidebar(false)
    const sorted = products.toSorted(function(a, b){return a.priority-b.priority})
    setAllproducts(sorted)

    if (sorted.length !== 0)
      setPageProducts(sorted.filter(product => {
        return product.category === 'Brotes - Microgreens' || product.category === 'Escuelas'
      }))
  }, [products])

  function toggleText() {
    var dots = document.getElementById("dots")
    var moreText = document.getElementById("more")
    var button = document.getElementById("button")

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden")

      // Hide the more text
      moreText.classList.add("hidden")

      // change text of the button
      button.innerHTML = "Ver más"
    } else {
      // Hide the dots
      dots.classList.add("hidden")

      // hide the more text
      moreText.classList.remove("hidden")

      // change text of the button
      button.innerHTML = "Ver menos"
    }
  }

  return (
    <Layout title={titlePage} description={descPage} url={urlPage} image={imgUrl}>
      <Navbartienda></Navbartienda>
      <div className='flex w-full flex-col gap-4 items-center min-h-screen'>
        <section id='descripcion' className="md:min-h-[250px] flex flex-col justify-center items-center gap-4 w-full h-auto bg-fixed bg-center bg-no-repeat text-white font-semibold bg-cover" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1686272821/Bidhara/products/top-bgs/brotes.jpg)' }}>
          <div className='flex flex-col justify-center items-center backdrop-blur-[1.5px] md:min-h-[250px] lg:backdrop-blur-[2px] py-2 px-2 md:px-3 lg:px-10'>
            <h1 className='font-text font-semibold text-[22px] lg:text-[22px] text-center w-full'>Brotes - Microgreens</h1>
            <p className='font-text text-justify text-[14px] md:text-[18px] lg:text-[20px]'>
              Los microgreens se han convertido en un elemento esencial en la alta cocina debido a su sabor, textura, presentación y valor nutricional.
              Los chefs creativos y experimentales han descubierto que estos diminutos brotes comestibles pueden añadir un toque especial a cualquier plato,
              creando experiencias culinarias únicas e inolvidables.<span id='dots' className='md:hidden'>..</span>
            </p>
            <p id='more' className='hidden md:block font-text text-justify text-[14px] md:text-[18px] lg:text-[20px]'>
              Los microgreens ofrecen una gran variedad de sabores, desde los más picantes y amargos hasta los más dulces y herbales.
              Los chefs pueden combinar diferentes tipos de microgreens para crear platos con múltiples capas de sabor y textura.
            </p>
            <button onClick={toggleText} id='button'
              className='font-text px-5 py-2 my-2 rounded-3xl bg-[#0495A8] text-white duration-300 md:hidden'>
              Ver más
            </button>
          </div>
        </section>
        <section id='productos' className='flex flex-col w-full h-auto justify-center items-center gap-4 px-2 md:px-3 lg:px-10 pt-6 max-w-6xl mb-6'>
          <div className='w-full flex justify-between items-center px-2'>
            {pageProducts && <p className='font-text text-[16px] md:text-[18px] lg:text-[20px]'>{`(Total ${pageProducts.length} productos)`}</p>}
          </div>
          <ul className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5'>
            {pageProducts && pageProducts.map(product => {
              return (
                <Productcard key={product._id} product={product}></Productcard>
              )
            })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps = async (context) => {

  try {
    await connectMongo()
    const response = await Test2.find()
    console.log(response)
    return {
      props: {
        products: JSON.parse(JSON.stringify(response))
      },
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}