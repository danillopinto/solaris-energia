import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import Page2 from './pages/Home/sections/Page2/Page2.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page3 from './pages/Home/sections/Page3/Page3.tsx'
import Page4 from './pages/Home/sections/Page4/Page4.tsx'
import Page5 from './pages/Home/sections/Page5/Page5.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/4" element={<Page2 />} />
          <Route path="/2" element={<Page3 />} />
          <Route path="/3" element={<Page4 />} />
          <Route path="/5" element={<Page5 />} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>,
)
