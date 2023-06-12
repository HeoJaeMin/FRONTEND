
import 'devextreme/dist/css/dx.light.css'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuItem from "./Core/MenuItem"

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => { setOpen(false) }} anchor='left'>
        <Box sx={{ width: 250 }}>
          <MenuItem text="종류별 상품" url="/prodCat" />
          <MenuItem text="브랜드별 상품" url="/brand"/>
        </Box>
      </Drawer>
      <Box>
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
      </Box>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>


  )
}

export default App;
