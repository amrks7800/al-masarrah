import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import {
  Home,
  Government,
  Team,
  GeneralAssembly,
  SatisfactionPage,
  Leader,
  ContactUs,
  Login,
  Govern,
  LatestNews,
  Contact,
  GovernFilePage,
  WhoAreWe,
} from "./pages"
import DashboardLayout from "./layouts/DashboardLayout"

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="govern" element={<Government />} />
          <Route path="who-are-we" element={<WhoAreWe />} />
          <Route path="team" element={<Team />} />
          <Route path="general-assembly" element={<GeneralAssembly />} />
          <Route path="satisfaction" element={<SatisfactionPage />} />
          <Route path="leader" element={<Leader />} />
          {/* <Route path="ceo" element={<CEO />} /> */}
          <Route path="contact" element={<ContactUs />} />
          {/* <Route path="projects" element={<ProjectsPage />} /> */}
          {/* <Route path="projects/*" element={<ProjectPage />} /> */}
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<LatestNews />} />
          <Route path="govern" element={<Govern />} />
          <Route path="govern/:id" element={<GovernFilePage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
