import Definition from "../../components/definition/Definition"
import Hero from "../../components/hero/Hero"
import { Projects } from "../../containers"
import Supporters from "../../components/supporters/Supporters"
import { LatestNews } from "../../containers"
import "./home.css"

const Home = () => {
  return (
    <>
      <Hero />
      <Definition />
      <Projects />
      <LatestNews />
      <Supporters />
    </>
  )
}

export default Home
