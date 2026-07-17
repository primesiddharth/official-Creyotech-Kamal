import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Career from "./components/pages/Career";
import ContactUs from "./components/pages/ContactUs";
import WebDevelopment from "./components/pages/services/WebDevelopment";
import DigitalMarketing from "./components/pages/services/DigitalMarketing";
import SocialMediaMarketing from "./components/pages/services/SocialMediaMarketing";
import { Toaster } from "react-hot-toast";
import ProposalSidebar from "./components/ProposalSidebar";
import ChatWidget from "./components/chatbot/ChatWidget";
import MiscellaneousServices from "./components/pages/services/MiscellaneousServices";
import ScrollToHash from "./components/ScrollToHash";
import JobDetails from "./components/career/JobDetails";
import PrivacyPolicyy from "./components/pages/PrivacyPolicyy";
import RefundPolicy from "./components/pages/RefundPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import ProjectDeliveryPolicy from "./components/pages/ProjectDeliveryPolicy";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <ScrollToTop />
      <ScrollToHash/>
      <ProposalSidebar />
      <ChatWidget />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:slug" element={<JobDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/services/miscellaneous-services"
            element={<MiscellaneousServices />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/project-delivery-policy"
            element={<ProjectDeliveryPolicy />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
