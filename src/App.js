// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Grid from '@mui/material/Unstable_Grid2';
import LeftSide from './components/LeftSide';
import Topbar from './components/Topbar';

function App() {
  return (
    <Grid container spacing={0} style={{ height: "100vh" }} >
      <Grid xs={3} md={3}>
        <LeftSide />
      </Grid>
      <Grid xs={9} md={9}>
        <Topbar />
        <Dashboard />
      </Grid>
    </Grid>
  )
}

export default App;
