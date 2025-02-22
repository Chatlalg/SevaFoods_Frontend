import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Donate from "../pages/donate";
//import NGO from "../pages/ngo";
//import Login from "../pages/login";
import Feedback from "../pages/feedback";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
//import DonateForm from '../pages/doanteform';
import AboutUs from "../pages/aboutus";
import NGOAuth from "../pages/NGOAuth";
import DonorAuth from "../pages/donorAuth";
import DonorInfo from "../pages/donorInfo";
//import Register from "../pages/Register"
import Geotag from "../pages/Geotag";
import RequestPage from "../pages/RequestPage";
import HistoryPage from "../pages/History";
import ChatPage from "../pages/chat";
import DonorExtraInfo from "../pages/DonorExtraInfo";
import CompleteProfile from "../pages/completeProfile";
import DPastHistory from "../pages/Donor/PastHistory"
import NPastHistory from "../pages/NGO/PastHistory"
import PHExtra from "../pages/Donor/PHExtra"
const AppRoutes = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/NGOAuth" element={<NGOAuth />} />
        <Route path="/donorAuth" element={<DonorAuth />} />
        <Route path="/donorInfo" element={<DonorInfo />} />
        <Route path="/completeProfile" element ={<CompleteProfile/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* <Route path="/Geotag" element={<Geotag />} /> */}
        <Route path="/RequestPage" element={<RequestPage />} />
        {/* <Route path="/History" element={<HistoryPage />} /> */}
        {/* <Route path="/Chat" element={<ChatPage />} /> */}
        <Route path="/Donor/PastHistory" element={<DPastHistory/>} />
        <Route path="/Donor/PHExtra" element={<PHExtra/>} />
        <Route path="/NGO/PastHistory" element={<NPastHistory/>} />
        <Route path="/DonorExtraInfo" element={<DonorExtraInfo/>} />
      </Routes>
      <Footer /> 
    </div>
  );
};

export default AppRoutes;


