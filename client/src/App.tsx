import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import CheckPage from './pages/CheckPage.tsx'
import DatenschutzPage from './pages/DatenschutzPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ImpressumPage from './pages/ImpressumPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
