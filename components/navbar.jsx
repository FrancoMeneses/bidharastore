import Image from "next/image"
import { FaAlignLeft } from "react-icons/fa"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useContext, useState } from "react"
import { StoreContext } from "@/context/store"

export default function Navbar(){

  const { cart, handleSidebarCart } = useContext(StoreContext)

  const [ open, setOpen ] = useState(true)
  const router = useRouter()

  function setMovilMenu(){
    setOpen(!open)
    let ul = document.getElementById('movilmenu')
    let collection = ul.children
    if(open){
      ul.classList.add('h-[150px]')
      setTimeout(() => {
        for(let i = 0; i < collection.length; i++){
          collection[i].classList.remove('hidden')
        }
      }, "300");
    }
    if(!open){
      ul.classList.remove('h-[150px]')
      for(let i = 0; i < collection.length; i++){
        collection[i].classList.add('hidden')
      }
    }
  }

  return(
    <nav className="w-full flex flex-col">
      <div className='w-full h-[100px] bg-[#014D64] flex justify-between items-center gap-2 md:px-[60px]'>
        <button type='button' className='md:hidden w-[25%] flex justify-center items-center' onClick={() => setMovilMenu()}>
          <FaAlignLeft className='text-[39px] text-white' />
        </button>
        <Link href='/' className="w-[50%] md:w-auto flex justify-center items-center">
        <Image 
        src='https://res.cloudinary.com/dfnqqumsc/image/upload/v1682470728/Bidhara/Logo1_caxifn.svg'
        alt='Logo de bidhara'
        width={122}
        height={75} />
        </Link>
        <ul className='hidden md:flex md:justify-center md:items-center md:text-white md:gap-[40px] font-text'>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/' className={router.pathname == '/' || router.pathname == '/inicio' ? 'underline underline-offset-2' : ''}>INICIO</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/tienda/brotes-microgreens' className={router.pathname == '/tienda' ? 'underline underline-offset-2' : ''}>TIENDA</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/nosotros' className={router.pathname == '/nosotros' ? 'underline underline-offset-2' : ''}>NOSOTROS</Link>
          </li>
          <li className='hover:underline hover:underline-offset-2 transition ease-in-out duration-300'>
            <Link href='/contacto' className={router.pathname == '/contacto' ? 'underline underline-offset-2' : ''}>CONTACTO</Link>
          </li>
        </ul>
        <button type="button" className='flex h-auto w-[25%] md:w-auto justify-center items-center' onClick={handleSidebarCart}>
          <div className="w-[38px] h-[55px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.43 38.05"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1-cart" d="M4.57,2.86v.5h.5v-.5Zm10.5,10v.5h.5v-.5ZM15.9,5.4l-.18.31L16,6l.37-.34Zm3.07,5-.49.12.11.42.43-.05ZM27.93,0V.5h.5V0ZM5.07,2.86v1H7.93v-1Zm10,10a9.51,9.51,0,0,1-9.49-9c0-.17,0-.33,0-.5h-1a10.5,10.5,0,0,0,10,10.49h.5v-.5h.5v-.5Zm-.5.5v3.36h1V13.36Zm2.86,0v3.36h1V13.36Zm-2.36-.5v.5h.5v-.5Zm-7.14-10v1a9.5,9.5,0,0,1,9.5,9.5h1A10.51,10.51,0,0,0,7.93,2.86Zm8,2.54.43.24.44.25c.06-.1.11-.2.18-.3A9.47,9.47,0,0,1,25.07,1V0A10.48,10.48,0,0,0,15.9,5.4Zm3.42,4.49A11.61,11.61,0,0,0,17,5.59c-.08-.1-.17-.19-.25-.28l-.37.33L16,6a10.89,10.89,0,0,1,2.52,4.59l.49-.12.48-.13C19.41,10.17,19.37,10,19.32,9.89ZM27.43.5c0,.17,0,.33,0,.5a9.51,9.51,0,0,1-8.1,8.89,2.7,2.7,0,0,1-.41.06l.06.5.05.49A10.5,10.5,0,0,0,28.43.5ZM25.07,0V1h2.86V0Z"/><path className="cls-2-cart" d="M27.42,1a9.51,9.51,0,0,1-8.1,8.89A11.61,11.61,0,0,0,17,5.59,9.47,9.47,0,0,1,25.07,1Z"/><path className="cls-1-cart" d="M25.65,27.52l-.49-.12a.64.64,0,0,1-.63.5v1a1.64,1.64,0,0,0,1.6-1.27Zm-15.08.38v1h14v-1Zm.72,1.53-.11-.53-.12-.6-.49.1h0l-.49.1L10.39,30l.49-.1.49-.1Zm-.41,0v1H23.67v-1Zm12.79,0v1a.64.64,0,0,1,.62.78l.49.11.49.12A1.65,1.65,0,0,0,23.67,29.43Zm1.11,1.89-.49-.11L24,32.37l.49.11.49.11.08-.36.18-.79Zm.31.91-.35-.2-.22.45-.22.45a2.17,2.17,0,0,1,1.22,2h1A3.16,3.16,0,0,0,25.09,32.23Zm.43,2.65a2.17,2.17,0,0,1-2.17,2.17v1a3.17,3.17,0,0,0,3.17-3.17Zm-4.33,0h-1a3.17,3.17,0,0,0,3.16,3.17v-1A2.17,2.17,0,0,1,21.19,34.88Zm.3-1.9-.35-.36a2.9,2.9,0,0,0-.62.86,3.14,3.14,0,0,0-.33,1.4h1a2.18,2.18,0,0,1,.65-1.55Zm-10-.5v1h10v-1Zm1,1a3.31,3.31,0,0,0-.62-.86l-.35.36-.35.35a2.18,2.18,0,0,1,.65,1.55h1A3.14,3.14,0,0,0,12.48,33.48Zm-.67,1.4a2.17,2.17,0,0,1-2.17,2.17v1a3.17,3.17,0,0,0,3.17-3.17Zm-4.34,0h-1a3.17,3.17,0,0,0,3.17,3.17v-1A2.17,2.17,0,0,1,7.47,34.88Zm.84-2.31-.25-.44a2.11,2.11,0,0,0-.31.21,3.18,3.18,0,0,0-1.28,2.54h1A2.18,2.18,0,0,1,8.56,33ZM5.46,16.11l-.49.1-.49.1.08.4L7.75,32.34l.07.33,1-.2Zm-3.82-.4v1H5v-1ZM1,15.07H0a1.63,1.63,0,0,0,1.64,1.64v-1A.64.64,0,0,1,1,15.07Zm-1-.76v.76H1v-.76Zm0,0H1a.64.64,0,0,1,.64-.64v-1A1.63,1.63,0,0,0,0,14.31Zm1.64-1.64v1H6.52v-1Zm4.88,0v1a.63.63,0,0,1,.63.51l.49-.1.49-.1A1.64,1.64,0,0,0,6.52,12.67Zm2,3L8.13,14l-.49.1-.49.1.44,2.13.49-.1.49-.1Zm-.41,0v1h18.7v-1Zm-2.7,0H5v.5l.49-.1Zm2.21.6.08.4h.41v-.5ZM8.8,32.47l-.49.1.25.43.32-.18ZM10,27.9l.12.61.49-.11v-.5ZM10.39,30l.09.4h.4v-.5Zm-.11,2.45.88.85.35-.35v-.5Zm5.28-16.77v1h1.87v-1Zm5.93,16.77V33l.35.35.87-.85ZM24,32.37l-.09.39.36.17.22-.45Zm2.75-16.66v1a.65.65,0,0,1,.63.79l.49.11.48.11A1.64,1.64,0,0,0,26.78,15.71Zm-2.84,17,.36.17.22-.45L24,32.37ZM21.49,33l.35.35.87-.85H21.49ZM15.56,16.71h1.87v-1H15.56Zm-4.4,16.62.35-.35v-.5H10.28Zm-.68-2.9h.4v-.5l-.49.1Zm.09-2.53H10l.12.61.49-.11ZM8.31,32.57l.25.43.32-.18-.08-.35ZM7.67,16.71h.41v-.5l-.49.1Zm-2.7-1v.5l.49-.1-.08-.4Zm22.93,1.9-.49-.11-2.25,9.9.49.12.48.11,2.25-9.91ZM10,27.9l.12.61.49-.11v-.5ZM10.39,30l.09.4h.4v-.5ZM24,32.37l-.09.39.36.17.22-.45Zm-2.54.11V33l.35.35.87-.85Zm-11.21,0,.88.85.35-.35v-.5Zm-1.48,0-.49.1.25.43.32-.18ZM5.38,15.71H5v.5l.49-.1Zm2.21.6.08.4h.41v-.5Z"/><path className="cls-2-cart" d="M25.52,34.88a2.17,2.17,0,1,1-3.68-1.55l.87-.85H10.28l.88.85A2.17,2.17,0,1,1,8.56,33l.32-.18-.08-.35L5.46,16.11l-.08-.4H1.64A.64.64,0,0,1,1,15.07v-.76a.64.64,0,0,1,.64-.64H6.52a.63.63,0,0,1,.63.51l.44,2.13.08.4H26.78a.65.65,0,0,1,.63.79l-2.25,9.9a.64.64,0,0,1-.63.5H10l.12.61L10.39,30l.09.4H23.67a.64.64,0,0,1,.62.78L24,32.37l-.09.39.36.17A2.17,2.17,0,0,1,25.52,34.88Z"/><path className="cls-2-cart" d="M17.43,13.36v2.35H15.56V12.86h-.5a9.51,9.51,0,0,1-9.49-9H7.93A9.5,9.5,0,0,1,17.43,13.36Z"/></g></g></svg>
          </div>
          <div className='rounded-full border-[1.5px] border-[#014D64] bg-white w-[28px] h-[28px] self-end flex justify-center items-center'>
            <p className='text-[#014D64]'>{cart && cart.length}</p>
          </div>
        </button>
      </div>
      <nav className='font-text'>
        <ul id='movilmenu' className={'absolute w-full flex flex-col gap-2 justify-center items-center text-white bg-[#014D64] h-[0px] transition-height ease-linear duration-300 z-30'}>
          <li className='hidden'>
              <Link href='/' className={router.pathname == '/' || router.pathname == '/inicio' ? 'underline underline-offset-2' : ''} >INICIO</Link>
          </li>
          <li className='hidden'>
              <Link href='/tienda/brotes-microgreens' className={router.pathname == '/tienda' ? 'underline underline-offset-2' : ''} >TIENDA</Link>
          </li>
          <li className='hidden'>
              <Link href='/nosotros' className={router.pathname == '/nosotros' ? 'underline underline-offset-2' : ''} >NOSOTROS</Link>
          </li>
          <li className='hidden'>
              <Link href='/contacto' className={router.pathname == '/contacto' ? 'underline underline-offset-2' : ''} >CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}