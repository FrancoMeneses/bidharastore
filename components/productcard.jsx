import Image from "next/image"
import Link from "next/link"

export default function Productcard(product){
  return(
    <Link href={`/tienda/producto/clavelina`}>
      <div className='w-[150px] h-[180px] border-[1px] border-[#0495A8] rounded-3xl flex flex-col justify-evenly items-center font-text lg:w-[230px] lg:h-[331px] lg:border-[1.5px] transition-all ease-in-out duration-200 hover:border-[#00243E] hover:border-[3px]'>
        <div className=''>
          <Image className='w-[80px] h-auto object-contain lg:w-[160px]'
          src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682651295/Bidhara/products/test/CLAVELINA.png'
          alt={`Foto de ${'producto'}`}
          width={1624}
          height={1548} />
        </div>
        <div className='flex w-auto h-auto justify-center items-center p-1 gap-2'>
          <div className='flex flex-col w-auto justify-between items-center h-full px-1 lg:px-0'>
            <p className='text-[12px] font-medium lg:text-[20px]'>Categoria</p>
            <p className='text-[14px] font-light lg:text-[22px]'>Nombre</p>
          </div>
          <div className='w-[1px] bg-black h-full lg:w-[2px]'></div>
            <p className='text-[14px] text-center font-light lg:text-[20px]'>Desde <span className='font-medium'>{`${'$70'}`}</span></p>
        </div>
      </div>
    </Link>
  )
}