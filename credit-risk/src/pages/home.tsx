import CreditRiskCalculator from '../components/creditRiskCalculator'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import Header from '../components/header'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <CreditRiskCalculator />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home

