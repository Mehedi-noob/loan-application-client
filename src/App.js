import logo from './logo.svg';
import './App.css';
import Registration from './Pages/Registration/Registration';
import { Toaster } from 'react-hot-toast';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className='bg-gray-700' style={{height: "100vh"}}>
      <Registration></Registration>
      <Toaster />
      <Footer></Footer>

    </div>
  );
}

export default App;
