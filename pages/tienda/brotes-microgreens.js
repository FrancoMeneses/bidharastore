import Layout from "@/components/layout"
import Navbartienda from "@/components/navbartienda"
import Productcard from "@/components/productcard"

export default function BrotesMicrogreens(){
  return(
    <Layout>
    <Navbartienda></Navbartienda>
    <div className='flex w-full flex-col gap-4 my-6 px-2 md:px-3 lg:px-10'>
      <section id='descripcion' className='flex flex-col justify-center items-center gap-4'>
        <h1 className='font-text font-semibold text-[20px] lg:text-[22px]'>Brotes - Microgreens</h1>
        <p className='font-text text-justify text-[16px] md:text-[18px] lg:text-[20px]'>Lorem ipsum dolor sit amet consectetur. Malesuada faucibus nisi sit non lacus quis nunc in risus. 
        Convallis enim urna dui volutpat. In urna bibendum vitae est ut. Elementum habitant mi proin suspendisse. 
        Congue orci nibh vulputate volutpat proin id commodo amet. Ut consectetur aliquam a vestibulum et quis. 
        Aliquam nibh mattis cursus vel iaculis mattis volutpat magna faucibus.
        </p>
      </section>
      <section id='productos' className='flex flex-col w-full h-auto justify-center items-center gap-4 pt-6'>
        <div className='w-full flex justify-between items-center px-2'>
          <p className='font-text text-[16px] md:text-[18px] lg:text-[20px]'>{`(Total ${'8'} productos)`}</p>
          <button type='button' className='w-auto h-auto py-1 px-[6px] rounded-2xl border-[3px] border-[#0495A8] font-text text-[16px] transition-all ease-in-out duration-200 hover:border-[#00243E]'>Ordenar por...</button>
        </div>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5'>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
      </div>
      </section>
    </div>
  </Layout>
  )
}