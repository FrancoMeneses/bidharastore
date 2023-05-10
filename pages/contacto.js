import Layout from "@/components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react"
import { StoreContext } from "@/context/store"

export default function Contacto() {

  const { handleEditContactForm, handleSubmitContactForm, contactForm } = useContext(StoreContext)

  return (
    <Layout title='Contacto - Bidhara'>
      <div className="w-full flex flex-col font-text justify-center items-center">
        <div className='w-full flex justify-center items-center h-[80px]'>
          <h1 className="text-center font-semibold text-[22px]">
            ¡Estamos para servirte!
          </h1>
        </div>
        <section id="faqs" className="w-full mx-auto">
          <div className="overflow-hidden">
            {/* <!-- accordion-tab  --> */}
            <div className="group outline-none accordion-section" tabIndex="1">
              <div
                className="group bg-[#0495A8] border-t-2 border-[#014D64] flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative"
              >
                <div className="text-[18px] text-center w-full group-focus:font-semibold text-white transition ease duration-500">
                  ¿Necesitas un pedido a otra ciudad o estado?
                </div>
                <div
                  className="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                >
                  <FontAwesomeIcon id="1" icon={faChevronDown} className='text-[20px] text-white' />
                </div>
              </div>
              <div
                className="group-focus:max-h-screen max-h-0 bg-[#014D64] px-4 overflow-hidden ease duration-500"
              >
                <p className="p-2 text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                  repellat amet doloribus consequuntur eos similique provident
                  tempora voluptates iure quia fuga dicta voluptatibus culpa
                  mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
            {/* <!-- accordion-tab --> */}
            {/* <!-- accordion-tab  --> */}
            <div className="group outline-none accordion-section" tabIndex="2">
              <div
                className="group bg-[#0495A8] border-t-2 border-[#014D64] flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative"
              >
                <div className="text-[18px] text-center w-full group-focus:font-semibold text-white transition ease duration-500">
                  ¿Quieres convertirte en cliente mayorista?
                </div>
                <div
                  className="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                >
                  <FontAwesomeIcon id="2" icon={faChevronDown} className='text-[20px] text-white' />
                </div>
              </div>
              <div
                className="group-focus:max-h-screen max-h-0 bg-[#014D64] px-4 overflow-hidden ease duration-500"
              >
                <p className="p-2 text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                  repellat amet doloribus consequuntur eos similique provident
                  tempora voluptates iure quia fuga dicta voluptatibus culpa
                  mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
            {/* <!-- accordion-tab --> */}
            {/* <!-- accordion-tab  --> */}
            <div className="group outline-none accordion-section" tabIndex="3">
              <div
                className="group bg-[#0495A8] border-t-2 border-b-2 border-[#014D64] flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative"
              >
                <div className="text-[18px] text-center w-full group-focus:font-semibold text-white transition ease duration-500">
                  ¿Necesitas atención personalizada?
                </div>
                <div
                  className="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                >
                  <FontAwesomeIcon id="3" icon={faChevronDown} className='text-[20px] text-white' />
                </div>
              </div>
              <div
                className="group-focus:max-h-screen max-h-0 bg-[#014D64] px-4 overflow-hidden ease duration-500"
              >
                <p className="p-2 text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                  repellat amet doloribus consequuntur eos similique provident
                  tempora voluptates iure quia fuga dicta voluptatibus culpa
                  mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
            {/* <!-- accordion-tab --> */}
          </div>
        </section>
        <section id="form-contact" className="w-full max-w-5xl flex flex-col justify-center items-center">
          <form onSubmit={handleSubmitContactForm} className="w-full px-2 flex flex-col font-text justify-center items-center gap-[20px] py-6 lg:px-6">
            <p className="text-justify">
              Puedes comunicarte con nosotros llenando el siguiente formulario, selecciona las opciones que más se acomoden a tus necesidades y con gusto te contactaremos.
            </p>
            <h2 className="font-semibold w-full text-center text-[22px]">
              Información de contacto
            </h2>

            <div className="w-full flex flex-col gap-[10px] md:flex-row md:gap-[30px]">
              <div className="w-full flex flex-col gap-[10px]">
                <div className="w-full flex justify-between gap-[10px]">
                  <div className="w-full flex flex-col">
                    <label htmlFor="nombreContacto-i" className="self-start">Nombre<span className="font-semibold text-red-500">*</span></label>
                    <input id="nombreContacto-i" name="nombreContacto" placeholder="Ej. Juan Pérez" type="text" onChange={handleEditContactForm} value={contactForm.nombreContacto} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                    <p id="nombreContacto-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="lugarContacto-i" className="self-start">Si es un lugar establecido ingrese el nombre</label>
                  <input id="lugarContacto-i" name="lugarContacto" placeholder="Ej. Viña Gourmet, ISU, UTP, etc." type="text" onChange={handleEditContactForm} value={contactForm.lugarContacto} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2"></input>
                </div>
                <div className="w-full flex justify-between gap-[10px]">
                  <div className="w-full flex flex-col">
                    <label className="" htmlFor="comunicoContacto-s">Me comunico como...<span className="font-semibold text-red-500">*</span></label>
                    <select name="comunicoContacto" id="comunicoContacto-s" onChange={handleEditContactForm} value={contactForm.comunicoContacto} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2 bg-white">
                      <option value="Restaurante o empresa">Restaurante o empresa</option>
                      <option value="Chef o persona independiente">Chef o persona independiente</option>
                      <option value="Estudiante">Estudiante</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <p id="comunicoContacto-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[10px]">
                <div className="w-full flex justify-between gap-[10px]">
                  <div className="w-full flex flex-col">
                    <label className="" htmlFor="asuntoContacto-s">Asunto<span className="font-semibold text-red-500">*</span></label>
                    <select name="asuntoContacto" id="asuntoContacto-s" onChange={handleEditContactForm} value={contactForm.asuntoContacto} className="w-full border-2 border-[#0495A8] rounded-lg h-[50px] invalid:border-red-500 required:border-[#0495A8] py-1 px-2 bg-white">
                      <option value="Envío a otra ciudad o estado">Envío a otra ciudad o estado</option>
                      <option value="Quiero ser cliente mayorista">Quiero ser cliente mayorista</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <p id="asuntoContacto-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between gap-[10px]">
                  <div className="w-full flex flex-col">
                  <label className="">Estoy interesado en...<span className="font-semibold text-red-500">*</span></label>
                    <div className="flex gap-2 self-start">
                      <input className="w-[22px]" type="checkbox" id="interesadoenContacto-1" name="interesadoenContacto" defaultChecked onChange={handleEditContactForm} value="Brotes - Microgreens"/>
                      <label htmlFor="interesadoenContacto-1" className="">Brotes - Microgreens</label>
                    </div>
                    <div className="flex gap-2 self-start">
                      <input className="w-[22px]" type="checkbox" id="interesadoenContacto-2" name="interesadoenContacto" onChange={handleEditContactForm} value="Flores comestibles"/>
                      <label htmlFor="interesadoenContacto-2" className="">Flores comestibles</label>
                    </div>
                    <div className="flex gap-2 self-start">
                      <input className="w-[22px]" type="checkbox" id="interesadoenContacto-3" name="interesadoenContacto" onChange={handleEditContactForm} value="Hojas baby"/>
                      <label htmlFor="interesadoenContacto-3" className="">Hojas baby</label>
                    </div>
                    <div className="flex gap-2 self-start">
                      <input className="w-[22px]" type="checkbox" id="interesadoenContacto-4" name="interesadoenContacto" onChange={handleEditContactForm} value="Microvegetales"/>
                      <label htmlFor="interesadoenContacto-4" className="">Microvegetales</label>
                    </div>
                    <p id="interesadoenContacto-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
                  </div>
                </div>
              </div>


            </div>


            <button type="submit" className="text-[18px] flex-no-shrink bg-[#0495A8] text-center py-2 w-[220px] shadow-sm hover:shadow-lg text-white font-semibold tracking-wider rounded-[10px]">Solicitar información</button>
          </form>
        </section>
      </div>
    </Layout>
  )
}