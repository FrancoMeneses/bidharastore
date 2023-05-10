import { createContext, useState } from "react"

// Se crea el contexto
export const StoreContext = createContext()

// Se crea el proveedor del contexto
export function StoreProvider({ children }) {

  const [allproducts, setAllproducts] = useState([])
  
  const [cart, setCart] = useState([])

  const [count, setCount] = useState(0)

  const [productCounter, setProductCounter] = useState(0)

  const [currentProduct, setCurrentProduct] = useState()

  const [currentPresentations, setCurrentPresentations] = useState([])

  const [openSidebar, setOpenSidebar] = useState(false)

  const [form, setForm] = useState({
    nombre: '',
    lugar: '',
    callenum: '',
    colonia: '',
    tipo: '',
    cp: ''
  })

  const [contactForm, setContactForm] = useState({
    nombreContacto: '',
    lugarContacto: '',
    comunicoContacto: 'Restaurante o empresa',
    asuntoContacto: 'Envío a otra ciudad o estado',
    interesadoenContacto: ['Brotes - Microgreens']
  })

  const CATEGORIES = [
    'Brotes - Microgreens',
    'Flores comestibles',
    'Hojas baby',
    'Microvegetales'
  ]

  const handleModal = (e) => {
    const product = allproducts.filter((p) => {
      return p._id === e.target.id
    })
    setCurrentPresentations(product[0].presentations)
    setCurrentProduct({
      id: product[0]._id + '/' + product[0].presentations[0].name,
      name: product[0].name,
      category: product[0].category,
      image: product[0].image.url,
      presentation: product[0].presentations[0],
      quantity: 1
    })
    const modal = document.getElementById('modalId')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }

  const hideModal = (e) => {
    document.getElementById('modalId').classList.add('hidden')
    let elements = document.getElementsByName("current")
    elements[0].checked = true
  }

  const handleSidebarCart = () => {
    setOpenSidebar(!openSidebar)
    if(openSidebar){
      document.getElementById('modalSidebar').classList.add('hidden')
    }else{
      document.getElementById('modalSidebar').classList.remove('hidden')
      document.getElementById('modalSidebar').classList.add('flex')
    }
  }

  const handleEmptyCart = () => {
    setCart([])
  }

  const handleProductCart = (e) => {
    const action = e.target.id.split(" ")[0]
    const id = e.target.id.replace(action, '').trim()
    if(action === 'delete'){
      setCart(cart.filter(product => {
        if(product.id === id){
          setCount(count - (product.presentation.price * product.quantity))
        }
        return product.id !== id
      }))
    }
    if(action === 'minus'){

      const p = cart.filter(product => {
        return product.id === id
      })

      if(p[0].quantity === 1){
        setCart(cart.filter(product => {
          if(product.id === id){
            setCount(count - product.presentation.price)
          }
          return product.id !== id
        }))
      }
      if(p[0].quantity > 1){
        setCart(cart.map(product => {
          if(product.id === id){
            if(product.id === id){
              setCount(count - product.presentation.price)
            }
            return {...product, quantity: product.quantity - 1}
          }else{
            return product
          }
        }))
      }
    }
    if(action === 'plus'){
      setCart(cart.map(product => {
        if(product.id === id){
          if(product.id === id){
            setCount(count + product.presentation.price)
          }
          return {...product, quantity: product.quantity + 1}
        }else{
          return product
        }
      }))
    }
  }

  const handleQuantity = (e) => {
    const modal = document.getElementById('modalId')
    if(e.target.id === 'minus'){
      currentProduct.quantity === 1 ? modal.classList.add('hidden') :
      setCurrentProduct({
        ...currentProduct,
        quantity: currentProduct.quantity - 1
      })
    }
    if(e.target.id === 'plus')
    setCurrentProduct({
      ...currentProduct,
      quantity: currentProduct.quantity + 1
    })
  }

  const handlePresentation = (e) => {
    const productId = currentProduct.id.split("/")
    console.log(productId)
    const newP = currentPresentations.filter(presentation => {
      return presentation.name === e.target.id
    })
    console.log(newP)
    setCurrentProduct({
      ...currentProduct,
      id: productId[0] + '/' + e.target.id,
      presentation: newP[0]
    })
  }

  const handleAdd = () => {
    if(cart.length === 0){
      setCart([
        ...cart,
        currentProduct
      ])
      setCount(count + (currentProduct.presentation.price * currentProduct.quantity))
      hideModal()
      handleSidebarCart()
    } 
    const exist = cart.filter(product => {
      return product.id === currentProduct.id
    })
    if(exist.length > 0){
      setCart(cart.map(product => {
        if(product.id === currentProduct.id){
          return {...product, quantity: product.quantity + currentProduct.quantity}
        }else{
          return product
        }
      }))
      setCount(count + (currentProduct.presentation.price * currentProduct.quantity))
      hideModal()
      handleSidebarCart()
    }
    if(exist.length === 0){
      setCart([
        ...cart,
        currentProduct
      ])
      setCount(count + (currentProduct.presentation.price * currentProduct.quantity))
      hideModal()
      handleSidebarCart()
    }
  }

  const handleEditForm = (e) => {
    let element = e.target.id.split('-')[0]
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    if(e.target.name === 'lugarestablecido'){
      return
    }else{
      if(e.target.value === ''){
        document.getElementById(`${element}-p`).classList.remove('hidden')
      }else{
        document.getElementById(`${element}-p`).classList.add('hidden')
      }
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    let empty = false
    for (let field in form){
      if(field === 'lugar') continue
      if(form[field] !== "lugar" && form[field] === ""){
        document.getElementById(`${field}-p`).classList.remove('hidden')
        empty = true
      }
    }
    if(empty){
      console.log('Hay uno vacio')
    }else{
      console.log('Todos llenos')
    }
  }

  const handleEditContactForm = (e) => {
    let element = e.target.id.split('-')[0]
    setContactForm({
      ...contactForm,
      [e.target.name] : e.target.value
    })
    if(e.target.name === 'lugarContacto'){
      return
    }
    if(e.target.name !== 'lugarContacto' && e.target.type !== 'checkbox'){
      if(e.target.value === ''){
        document.getElementById(`${element}-p`).classList.remove('hidden')
      }else{
        document.getElementById(`${element}-p`).classList.add('hidden')
      }
    }
    if(e.target.type === 'checkbox'){
      let checkboxes = document.getElementsByName('interesadoenContacto')
      let count = 0
      checkboxes.forEach(check => {
        if(check.checked === false){
          count++
        }
      })
      console.log(count)
      if(count === 4){
        document.getElementById(`interesadoenContacto-p`).classList.remove('hidden')
      }else{
        document.getElementById(`interesadoenContacto-p`).classList.add('hidden')
      }
    }
    if(e.target.type == 'checkbox'){
      const exist = contactForm.interesadoenContacto.filter(el => {
        return el === e.target.value
      })
      if(exist.length !== 0){
        const newArray =contactForm.interesadoenContacto
        const index = newArray.indexOf(e.target.value)
        newArray.splice(index, 1)
        setContactForm({
          ...contactForm,
          interesadoenContacto: newArray
        }
      )
      }else{
        let newArr = contactForm.interesadoenContacto
        newArr.push(e.target.value)
        setContactForm({
            ...contactForm,
            interesadoenContacto: newArr
          }
        )
      }
    }
  }

  const handleSubmitContactForm = (e) => {
    e.preventDefault()
    console.log(contactForm)
    let empty = false
    for (let field in contactForm){
      if(field === 'lugarContacto') continue
      if(contactForm[field] !== "lugarContacto" && contactForm[field].length === 0){
        document.getElementById(`${field}-p`).classList.remove('hidden')
        empty = true
      }
    }
    if(empty){
      console.log('Hay uno vacio')
    }else{
      console.log('Todos llenos')
    }
  }

  return(
    <StoreContext.Provider
    value={{
      cart,
      setCart,
      count,
      setCount,
      handleSidebarCart,
      handleEmptyCart,
      handleProductCart,
      openSidebar,
      setOpenSidebar,
      productCounter,
      setProductCounter,
      handleModal,
      hideModal,
      allproducts,
      setAllproducts,
      currentProduct,
      setCurrentProduct,
      handleQuantity,
      handlePresentation,
      setCurrentPresentations,
      currentPresentations,
      handleAdd,
      form,
      setForm,
      handleEditForm,
      handleSubmitForm,
      contactForm,
      setContactForm,
      handleEditContactForm,
      handleSubmitContactForm
    }
      }>
        {children}
    </StoreContext.Provider>
  )
}