import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlueVoyager from "./pages/BlueVoyager/BlueVoyager";
import Blog from "./pages/Blog/Blog";
import FAQPage from "./pages/FAQPage/FAQPage";
import PrivateYachtCharter from "./pages/PrivateYachtCharter/PrivateYachtCharter";
import PrivateYachtDetail from "./pages/PrivateYachtDetail/PrivateYachtDetail";

function App({data}) {

  const fullData = data;
  const headerData = fullData.headerData;
  const homePageData = fullData.homePageData;
  const aboutUsData = fullData.aboutPage;
  const blueVoyageData = fullData.blueVoyageData;
  const blogData = fullData.fargoBlogData;
  const faqPageData = fullData.fAQPageData;
  return (
    <>
      <Header headerData={headerData}/>
      <Routes>
        <Route path={"/"} element={<HomePage homePageData={homePageData}/>}/>
        <Route path={"/about"} element={<AboutUs aboutUsData={aboutUsData}/>}/>
        <Route path={"/blueVoyage"} element={<BlueVoyager blueVoyageData={blueVoyageData}/>}/>
        <Route path={"/blog"} element={<Blog blogData={blogData}/>}/>
        <Route path={"/faq"} element={<FAQPage faqPageData={faqPageData}/>}/>
        <Route path={"/privateYachtCharter"} element={<PrivateYachtCharter/>}/>
        <Route path={"/privateYachtDetail"} element={<PrivateYachtDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
