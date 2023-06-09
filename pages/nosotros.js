import Layout from "@/components/layout"
import Image from "next/image"

export default function Nosotros() {

  const titlePage = '¿Quiénes somos? | Bidhara'
  const descPage = 'Conoce acerca de nosotros, el proceso de preparación de nuestros productos hasta su distribución y entrega.'
  const imgUrl = ''
  const urlPage = 'https://bidharamexico.com/nosotros'

  return (
    <Layout title={titlePage} description={descPage} url={urlPage}>
      <div className="w-full h-full flex flex-col font-text justify-center items-center">
        <section id='quienessomos' className="flex flex-col justify-center items-center w-full gap-4 lg:min-h-[400px] bg-fixed bg-center bg-no-repeat text-white font-semibold bg-auto" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1685327130/Bidhara/products/test/SAM_5582.jpg)'}}>
          <div className="flex flex-col justify-center items-center w-full h-full lg:min-h-[400px] backdrop-blur-[1px] px-2 py-5">
            <h1 className="font-semibold text-[20px]">
              ¿Quiénes somos?
            </h1>
            <div className="text-[18px] flex flex-col justify-center items-center gap-2 md:items-start">
              <p className="text-justify">
              Somos una empresa poblana especializada en el cultivo de mini y micro vegetales, hierbas y flores comestibles. 
              </p>
              <p className="text-justify">
              Comprometidos con una agricultura responsable y el cuidado del medio ambiente, combinamos la hidroponía y el cultivo orgánico.
              </p>
              <p className="text-justify">
              Trabajando con chefs y consumidores finales en la innovación de nuevos aromas y sabores que aporten a sus platos un toque de excelencia.
              </p>
            </div>
          </div>
        </section>
        <div className="w-full h-full flex flex-col">
          <section id='nuestrosproductos' className="w-full h-auto flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col justify-center items-center py-3 gap-4 w-full h-full text-black">
              <h2 className="font-semibold text-[20px] text-center">Nuestros productos</h2>
              <div className="flex flex-col w-full justify-center items-center gap-2 lg:max-w-5xl">
                <p className="text-justify px-3 md:px-6">
                  Ofrecemos una amplia variedad de productos, desde hojas baby hasta microgreens, así como una gran variedad de flores comestibles. 
                  Nuestros vegetales son cuidadosamente seleccionados y cultivados para garantizar que cumplan con nuestros estándares de calidad y sabor excepcional.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Trabajamos en estrecha colaboración con chefs de Puebla y otros estados para comprender sus necesidades culinarias y producir vegetales que cumplan con sus altas expectativas. 
                  Nuestros productos son ideales para la alta cocina y se utilizan en restaurantes de renombre en la ciudad de Puebla.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Además, ofrecemos un servicio personalizado para satisfacer las necesidades de cada cliente. 
                  Desde la selección de los vegetales hasta el empaque y la entrega, trabajamos de cerca con nuestros clientes para garantizar su satisfacción.
                </p>
              </div>
            </div>
            <div className="h-auto w-full my-4 px-3 md:px-6">
              <Image className="h-auto max-h-[400px] w-full lg:h-auto lg:w-full object-cover rounded-3xl"
              src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685321144/Bidhara/products/test/IMG_20180925_083302.jpg'
              alt='Foto de nuestros productos'
              width={1600}
              height={1066}
              />
            </div>
          </section>
          <section id='comoloscreamos' className="w-full h-auto flex flex-col justify-center items-center lg:flex-row-reverse">
            <div className="flex flex-col justify-center items-center py-3 gap-4 w-full h-full text-black">
              <h2 className="font-semibold text-[20px] text-center">¿Cómo los creamos?</h2>
              <div className="flex flex-col w-full justify-center items-center gap-2 lg:max-w-5xl">
                <p className="text-justify px-3 md:px-6">
                  Todo comienza con la selección de las mejores semillas. 
                  Seleccionamos cuidadosamente nuestras semillas de los mejores proveedores, para garantizar que sean de alta calidad y produzcan plantas saludables.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Luego, nuestros expertos cultivadores plantan y cultivan nuestros vegetales en invernaderos controlados para garantizar que estén protegidos de factores externos que puedan afectar su crecimiento. 
                  Monitoreamos constantemente el clima, la humedad y la luz para asegurarnos de que nuestras plantas tengan el ambiente ideal para crecer y prosperar.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Una vez que los vegetales están listos para ser cosechados, se seleccionan cuidadosamente y se empacan de manera meticulosa para garantizar que lleguen a su destino en óptimas condiciones. 
                  Utilizamos métodos de empaque innovadores que prolongan la vida útil de nuestros productos y los mantienen frescos y crocantes por más tiempo.
                </p>
              </div>
            </div>
            <div className="h-auto w-full my-4 px-3 md:px-6">
              <Image className="h-auto max-h-[400px] w-full lg:h-auto lg:w-full object-cover rounded-3xl"
              src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685321084/Bidhara/products/test/IMG_20181115_073041.jpg'
              alt='Foto de como creamos nuestros productos'
              width={1600}
              height={1066}
              />
            </div>
          </section>
          <section id='comopreparamos' className="w-full h-auto flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col justify-center items-center py-3 gap-4 w-full h-full text-black">
              <h2 className="font-semibold text-[20px] text-center">¿Cómo preparamos y distribuimos un pedido?</h2>
              <div className="flex flex-col w-full justify-center items-center gap-2 lg:max-w-5xl">
                <p className="text-justify px-3 md:px-6">
                  Sabemos que cada producto es único y requiere un proceso de preparación y distribución cuidadoso para garantizar su frescura y calidad.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Seleccionamos y cosechamos cuidadosamente sus productos por la mañana para que lleguen frescos a su destino en menos de 5 horas.
                </p>
                <p className="text-justify px-3 md:px-6">
                  Por último, nuestros productos se distribuyen a nuestros clientes en cajas refrigeradas de alta calidad que protegen los productos durante el envío. 
                  Utilizamos un sistema de envío confiable y rápido para garantizar que los productos lleguen a nuestros clientes lo antes posible y en perfectas condiciones.
                </p>
              </div>
            </div>
            <div className="h-auto w-full my-4 px-3 md:px-6">
              <Image className="h-auto max-h-[400px] w-full lg:h-auto lg:w-full object-cover rounded-3xl"
              src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1685326668/Bidhara/products/test/SAM_5589.jpg'
              alt='Foto de como preparamos y distribuimos tu producto'
              width={1600}
              height={1066}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}