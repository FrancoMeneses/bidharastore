import Image from "next/image"
import Link from "next/link"

export default function Productcard({ product }){

  const urlname = product.name.toLowerCase()

  return(
    <Link href={`/tienda/producto/${urlname}`}>
      <div className='w-[150px] h-[180px] border-[1px] border-[#0495A8] rounded-3xl flex flex-col justify-evenly items-center font-text lg:w-[230px] lg:h-[331px] lg:border-[1.5px] transition-all ease-in-out duration-100 hover:border-[#00243E] hover:border-[3px]'>
        <div className=''>
          <Image className='w-[80px] h-fit object-contain lg:w-[160px] aspect-square'
          src={product.image.url}
          alt={`Foto de ${product.name}`}
          width={600}
          height={300} />
        </div>
        <div className='flex w-auto h-auto justify-center items-center p-1 gap-2'>
          <div className='flex flex-col w-auto justify-between items-start h-full px-1 lg:px-0'>
            <p className='text-[12px] font-medium lg:text-[20px]'>{product.category}</p>
            <p className='text-[14px] font-light lg:text-[22px]'>{product.name}</p>
          </div>
          <div className='w-[1px] bg-black h-full lg:w-[2px]'></div>
            <p className='text-[14px] text-center font-light lg:text-[20px]'>Desde <span className='font-medium'>{`${'$70'}`}</span></p>
        </div>
      </div>
    </Link>
  )
}