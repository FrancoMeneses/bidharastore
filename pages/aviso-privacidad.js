import Layout from "@/components/layout"

export default function AvisoPrivacidad(){

  const titlePage = `Aviso de privacidad | Bidhara`
  const descPage = ``
  const imgUrl = ''
  const urlPage = `https://bidharamexico.com/aviso-privacidad`

  return(
    <Layout title={titlePage} url={urlPage}>
      <main className="font-text py-6 px-2 md:px-3 lg:px-10 flex flex-col w-full h-auto gap-4">
        <h1 className="text-center font-bold text-[22px]">Aviso de Privacidad Integral</h1>
        <div className="text-justify flex flex-col w-full h-full gap-4">
          <p>
            Omar Meneses Guarneros mejor conocido como Bidhara, con domicilio en Corregidora 19 Colonia Tepeyac Puebla, Puebla y portal de internet www.bidharamexico.com, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
          </p>
          <h2 className="font-semibold text-center">
            ¿Para qué fines utilizaremos sus datos personales?
          </h2>
          <div className="flex flex-col w-full h-auto gap-4">
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
            <ul className="list-disc list-inside">
              <li className="">Envío de productos adquiridos en esta tienda en línea</li>
              <li>Publicidad y marketing</li>
              <li>Encuestas de opinión</li>
            </ul>
              <h3 className="font-semibold text-center">¿Qué datos personales utilizaremos para estos fines?</h3>
              Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
            <ul className="list-disc list-inside">
              <li>Datos de identificación y contacto</li>
            </ul>
          </div>
          <h2 className="font-semibold text-center">
            ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?
          </h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
          </p>
          <p>
            Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a bidhara@hotmail.com y deberá contener:
          </p>
          <ul className="list-disc list-inside">
            <li>Nombre completo del titular.</li>
            <li>Domicilio.</li>
            <li>Teléfono.</li>
            <li>Correo electrónico usado en este sitio web.</li>
            <li>Copia de una identificación oficial adjunta.</li>
            <li>Asunto «Derechos ARCO»</li>
            <li>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</li>
          </ul>
          <h2 className="font-semibold text-center">
            ¿En cuántos días le daremos respuesta a su solicitud?
          </h2>
          <p>
            10 días
          </p>
          <h2 className="font-semibold text-center">
            d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?
          </h2>
          <p>
            bidhara@hotmail.com
          </p>
          <h2 className="font-semibold text-center">
            El uso de tecnologías de rastreo en nuestro portal de internet
          </h2>
          <p>
            Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
          </p>
          <ul className="list-disc list-inside">
            <li>Identificadores, nombre de usuario y contraseñas de sesión</li>
          </ul>
          <p>
            Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.
          </p>
          <h2 className="font-semibold text-center">
            ¿Cómo puede conocer los cambios en este aviso de privacidad?
          </h2>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web www.bidharamexico.com.
          </p>
          <h2 className="font-semibold">
            Última actualización de este aviso de privacidad: 30/05/2023
          </h2>
        </div>
      </main>
    </Layout>
  )
}