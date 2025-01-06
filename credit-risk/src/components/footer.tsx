const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p>Contáctanos para asesoría financiera personalizada</p>
              <a href="mailto:info@creditrisk.com" className="text-indigo-300 hover:text-indigo-100">info@creditrisk.com</a>
            </div>
            <div className="w-full md:w-1/2 text-sm">
              <p>Los datos ingresados no se almacenan ni comparten.</p>
              <a href="/privacy-policy" className="text-indigo-300 hover:text-indigo-100">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  