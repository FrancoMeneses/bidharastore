import { createContext, useState } from "react"
import { useRouter } from "next/router"

// Se crea el contexto
export const StoreContext = createContext()

// Se crea el proveedor del contexto
export function StoreProvider({ children }) {

  const router = useRouter()

  const [allproducts, setAllproducts] = useState([])

  const [bestSellerProducts, setBestSellerProducts] = useState([])
  
  const [cart, setCart] = useState([])

  const [count, setCount] = useState(0)

  const [productCounter, setProductCounter] = useState(0)

  const [currentProduct, setCurrentProduct] = useState()

  const [currentPresentations, setCurrentPresentations] = useState([])

  const [openSidebar, setOpenSidebar] = useState(false)

  const [hasStock, setHasStock] = useState(false)

  const [hasCatEscuela, setHasCatEscuela] = useState(false)

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
      idFind: product[0]._id,
      id: product[0]._id + '/' + product[0].presentations[0].name,
      name: product[0].name,
      category: product[0].category,
      stock: product[0].stock,
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
    const newP = currentPresentations.filter(presentation => {
      return presentation.name === e.target.id
    })
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
    let ws = e.target.value.trim()
    let element = e.target.id.split('-')[0]
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    if(e.target.name === 'lugar' || e.target.name === 'tipo'){
      return
    }else{
      if(e.target.value === '' || ws.length === 0){
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
      if(field === 'lugar' || field === 'tipo') continue
      if(form[field] !== 'lugar' || form[field] !== 'tipo'){
        if(form[field] === ''){
          document.getElementById(`${field}-p`).classList.remove('hidden')
          empty = true
        }
      }
    }
    if(!empty){
      const newLine = '%0a'
      const space = '%20'
      let message = 
      `*Bienvenido/a${space}a${space}Bidhara*${newLine}${newLine}*Información${space}de${space}contacto*${newLine}`
      for (let field in form){
        let trim = form[field].trim()
        if(field === 'cp'){
          trim = trim.slice(0,5)
        }
        let encoded = trim.replaceAll(' ','%20')
        let fieldMessage = ''
        switch(field){
          case 'nombre':
            fieldMessage = `*Cliente:*${space}${encoded}`
            message = message + fieldMessage
            break
          case 'lugar':
            if(form[field] !== ''){
              fieldMessage = `${newLine}*Lugar${space}establecido:*${space}${encoded}`
              message = message + fieldMessage
            }
            break
          case 'callenum':
            fieldMessage = `${newLine}*Calle${space}y${space}número:*${space}${encoded}`
            message = message + fieldMessage
            break
          case 'colonia':
            fieldMessage = `${newLine}*Colonia:*${space}${encoded}`
            message = message + fieldMessage
            break
          case 'tipo':
            if(form[field] !== ''){
              fieldMessage = `${newLine}*Tipo${space}de${space}establecimiento:*${space}${encoded}`
              message = message + fieldMessage
            }
            break
          case 'cp':
          fieldMessage = `${newLine}*Código${space}postal:*${space}${encoded}`
          message = message + fieldMessage
          break
        }
      }
      message = message + `${newLine}${newLine}*Resumen${space}de${space}pedido*${newLine}${newLine}*Variedades${space}(${cart.length})*${newLine}*Total${space}de${space}productos${space}(${productCounter})*${newLine}`
      cart.forEach((product, index) => {
        for (let field in product){
          let encoded = ''
          let fieldMessage = ''
          switch(field){
            case 'name':
              encoded = product.name.replaceAll(' ','%20')
              fieldMessage = `${newLine}*Producto:*${space}${encoded}`
              message = message + fieldMessage
              break
            case 'category':
              encoded = product.category.replaceAll(' ','%20')
              fieldMessage = `${newLine}*Categoría:*${space}${encoded}`
              message = message + fieldMessage
              break
            case 'presentation':
              encoded = product.presentation.name.replaceAll(' ','%20')
              fieldMessage = `${newLine}*Presentación:*${space}${encoded}`
              message = message + fieldMessage
              break
            case 'quantity':
              encoded = product.quantity.toString()
              const subtotal = product.quantity * product.presentation.price
              fieldMessage = `${newLine}*Cantidad:*${space}${encoded}${newLine}*Subtotal:* $${subtotal}${newLine}`
              message = message + fieldMessage
              break
          }
        }
      })
      const shipment = count >= 100 ? `GRATIS` : `$35`
      const total = count >= 100 ? count : (count + 35)
      message = message + `${newLine}*Envío:* ${shipment}${newLine}*Total:* $${total}`
      window.open(`https://wa.me/2212345135?text=${message}`,)
      // window.open(`https://wa.me/2212007272?text=${message}`,)
      router.push(`/tienda/gracias`)
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
      let ws = e.target.value.trim()
      if(e.target.value === ''  || ws.length === 0){
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
    let empty = false
    for (let field in contactForm){
      if(field === 'lugarContacto') continue
      if(contactForm[field] !== "lugarContacto" && contactForm[field].length === 0){
        document.getElementById(`${field}-p`).classList.remove('hidden')
        empty = true
      }
    }
    if(!empty){
      const newLine = '%0a'
      const space = '%20'
      let message = ''
      for (let field in contactForm){
        let encoded = ''
        let fieldMessage = ''
        let trim = ''
        switch(field){
          case 'nombreContacto':
            trim = contactForm[field].trim()
            encoded = trim.replaceAll(' ','%20')
            fieldMessage = `Mi${space}nombre${space}es${space}*${encoded}*,${space}`
            message = message + fieldMessage
            break
          case 'lugarContacto':
            trim = contactForm[field].trim()
            encoded = trim.replaceAll(' ','%20')
            if(contactForm[field] !== '' && trim.length !== 0){
              fieldMessage = `me${space}comunico${space}por${space}parte${space}de${space}*${encoded}*,${space}`
              message = message + fieldMessage
            }
            break
          case 'comunicoContacto':
            encoded = contactForm[field].replaceAll(' ','%20')
            if(contactForm[field] !== 'Otro'){
              fieldMessage = `soy${space}un${space}*${encoded}*,${space}`
              message = message + fieldMessage
            }
            break
          case 'interesadoenContacto':
              let prods = ''
              contactForm.interesadoenContacto.forEach((cat, index) => {
                if(cat !== ''){
                  let catEncoded = cat.replaceAll(' ','%20')
                  if(index === (contactForm.interesadoenContacto.length - 1) && index === 0){
                    prods = prods + `${catEncoded}`
                  }
                  if(contactForm.interesadoenContacto.length !== 1 && index === 0){
                    prods = prods + `${catEncoded}`
                  }
                  if(index === (contactForm.interesadoenContacto.length - 1) && index !== 0){
                    prods = prods + `${space}y${space}${catEncoded}`
                  }
                  if(index !== (contactForm.interesadoenContacto.length - 1) && index !== 0){
                    prods = prods + `,${space}${catEncoded}`
                  }
                }
              })
              fieldMessage = `estoy${space}interesado${space}en${space}*${prods}*.`
              message = message + fieldMessage
            break
          case 'asuntoContacto':
            encoded = contactForm[field].replaceAll(' ','%20')
            if(contactForm[field] === 'Envío a otra ciudad o estado'){
              fieldMessage = `${space}quisiera${space}información${space}acerca${space}del${space}*${encoded}*,${space}`
              message = message + fieldMessage
            }
            if(contactForm[field] === 'Quiero ser cliente mayorista'){
              fieldMessage = `${space}quisiera${space}información${space}acerca${space}de${space}la${space}opción${space}*${encoded}*,${space}`
              message = message + fieldMessage
            }
        }
      }
      window.open(`https://wa.me/2212345135?text=${message}`,)
      // window.open(`https://wa.me/2212007272?text=${message}`,)
    }
  }

  const handleThanks = e => {
    e.preventDefault()
    if(e.target.id === 'tks-save'){
      router.push('/tienda/brotes-microgreens')
    }
    if(e.target.id === 'tks-delete'){
      setCart([])
      setCount(0)
      setProductCounter(0)
      setForm({
        nombre: '',
        lugar: '',
        callenum: '',
        colonia: '',
        tipo: '',
        cp: ''
      })
      router.push('/')
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
      bestSellerProducts,
      setBestSellerProducts,
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
      handleSubmitContactForm,
      handleThanks,
      hasStock,
      setHasStock,
      hasCatEscuela,
      setHasCatEscuela
    }
      }>
        {children}
    </StoreContext.Provider>
  )
}