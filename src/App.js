// import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import LeftSide from './components/LeftSide';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tag from './pages/Tag';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid container spacing={0} style={{ height: "100vh" }} >
          <Grid xs={3} md={3}>
            <LeftSide />
          </Grid>
          <Grid xs={9} md={9}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tag" element={<Tag />} />              
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  )
}

export default App;
