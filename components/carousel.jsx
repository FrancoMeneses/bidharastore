import Image from "next/image"
import { useRouter } from "next/router"
import { Carousel } from 'react-responsive-carousel'

export default function IndexCarousel() {

  const router = useRouter()

  const handleSlide = (index, item) => {
    if(index === 2){
      router.push('/tienda/producto/648157ad1931cc225b24b05a')
    }
  }

  return (
    <div className="w-full h-full">
      <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      onClickItem={handleSlide}
      interval={3000}
      autoPlay
      >
        <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
            <Image className="w-full h-full object-cover object-top"
            width={1600}
            height={1066}
            alt=""
            src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1685589926/Bidhara/banners/Grey_3D_Online_Store_Facebook_Cover.png" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
            <Image className="w-full h-full object-cover object-center"
            width={1600}
            height={1066}
            alt=""
            src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1685589926/Bidhara/banners/imagen_descuento.png" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px] cursor-pointer">
            <Image className="w-full h-full object-cover object-center"
            width={1600}
            height={1066}
            alt=""
            src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1685589926/Bidhara/banners/OPCION1.png" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  )
}