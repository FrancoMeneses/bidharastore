import connectMongo from 'utils/connectMongo'
import Test2 from '@/models/testmodel'
import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import Productcard from "@/components/productcard"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "@/context/store"

export default function Florescomestibles({products}) {
  
  const {allproducts, setAllproducts} = useContext(StoreContext)
  const [pageProducts, setPageProducts] = useState([])

  useEffect(() => {
    setAllproducts(products)
    if(allproducts.length !== 0)
    setPageProducts(allproducts.filter(product => {
      return product.category === 'Flores comestibles'
    }))
  },[products, setAllproducts, allproducts])

  const [openSort, setOpenSort] = useState(false)


  const btnsort = () => {
    setOpenSort(!openSort)
    if(openSort){
      const btn1 = document.getElementById('btnSort')
      const btn2 = document.getElementById('btnSA')
      const btn3 = document.getElementById('tnSZ')

    }
  }

  const sortAZ = () => {
    const productsSort = pageProducts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    setPageProducts(productsSort)
    setOpenSort(!openSort)
  }

  const sortZA = () => {
    const productsSort = pageProducts.sort(function (a, b) {
      if (a.name > b.name) {
        return -1
      }
      if (a.name < b.name) {
        return 1
      }
      return 0
    })
    setPageProducts(productsSort)
    setOpenSort(!openSort)
  }

  return (
    <Layout>
      <Navbartienda></Navbartienda>
      <div className='flex w-full flex-col gap-4 my-6 px-2 md:px-3 lg:px-10'>
        <section id='descripcion' className='flex flex-col justify-center items-center gap-4 w-full'>
          <h1 className='font-text font-semibold text-[20px] lg:text-[22px] text-center w-full'>Flores Comestibles</h1>
          <p className='font-text text-justify text-[16px] md:text-[18px] lg:text-[20px]'>
            Las flores comestibles se utilizan en la gastronomía como ingredientes decorativos en ensaladas, postres, bebidas, guarniciones y otros platos. 
            Además de su belleza, las flores comestibles también ofrecen un sabor delicado y una textura única que puede aportar una dimensión adicional a la comida.
          </p>
        </section>
        <section id='productos' className='flex flex-col w-full h-auto justify-center items-center gap-4 pt-6'>
          <div className='w-full flex justify-between items-center px-2'>
          {pageProducts && <p className='font-text text-[16px] md:text-[18px] lg:text-[20px]'>{`(Total ${pageProducts.length} productos)`}</p>}
            <div className="w-auto min-h-fit relative">
                <button type='button' id='btnSort' className='py-1 px-[6px] rounded-2xl border-[3px] border-[#0495A8] font-text text-[16px] transition-all ease-in-out duration-200 hover:border-[#00243E] focus:rounded-t-2xl' onClick={() => btnsort()}>
                  Ordenar por...
                </button>
                <ul className={openSort ? 'absolute left-0 top-8' : 'hidden'}>
                  <li>
                    <button type="button" id='btnSA' className='bg-white py-1 px-[6px] rounded-2xl border-r-[3px] border-l-[3px] border-[#0495A8] font-text text-[16px] transition-all ease-in-out duration-200 hover:border-[#00243E]' onClick={sortAZ}>A-Z</button>
                  </li>
                  <li>
                    <button type="button" id='btnSZ' className='bg-white py-1 px-[6px] rounded-2xl border-r-[3px] border-l-[3px] border-[#0495A8] font-text text-[16px] transition-all ease-in-out duration-200 hover:border-[#00243E]' onClick={sortZA}>Z-A</button>
                  </li>
                </ul>
            </div>
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