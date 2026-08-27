import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CursorField from './components/CursorField'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import AchievementDetail from './pages/AchievementDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CursorField />
      <div className="relative z-10">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience/:slug" element={<ExperienceDetail />} />
            <Route path="/achievements/:slug" element={<AchievementDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
