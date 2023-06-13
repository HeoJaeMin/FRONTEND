
import 'devextreme/dist/css/dx.light.css'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './Component/Main';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import MenuItem from "./Core/MenuItem"
import ProdCat from './Component/ProdCat';
import ProdCatDtl from './Component/ProdCatDtl';

function App() {

  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setOpen(false)
  }, [loc])

  window.closing = () => {
    setOpen(false)
  }

  return (
    <>
      {window.location.pathname.includes("popup") ?
        // if popup
        <Routes>
          {/*종류별 상품 상세 팝업*/}
          <Route path="/popup/prodCat/detail" element={<ProdCatDtl />} />
        </Routes>
        : //else
        <>
          {/* sideBar */}
          <Drawer open={open} onClose={() => { window.closing() }} anchor='left'>
            <Box sx={{ width: 250 }}>
              <MenuItem text="홈" url="/" />
              <MenuItem text="종류별 상품" url="/prodCat" />
              <MenuItem text="브랜드별 상품" url="/brand" />
            </Box>
          </Drawer>
          {/* sideBar */}
          {/* header */}
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                Task
              </Typography>
            </Toolbar>
          </AppBar>
          {/* header */}
          {/* route */}
          <Box >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/prodCat" element={<ProdCat />} />
              <Route path="*" element={<div>NotFound</div>} />
            </Routes>
          </Box>
          {/* route */}
        </>}


    </>


  )
}

export default App;
