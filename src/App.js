import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import Upload from './components/upload/Upload';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';
import MainNotification from './components/MainNotification';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './main.css';

function App() {
  return (
    <>
    <Navbar />
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
        <AuthContext>
          <Loading />
          <Modal />
          <MainNotification />
          <Nav />
          <Upload />
          <ImagesList />
        </AuthContext>
      </Container>
      <Footer />
    </>
  );
}

export default App;
