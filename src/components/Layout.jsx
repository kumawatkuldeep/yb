import Footer from "./Footer"
import Navbar2 from "./Navbar2"
import ChatButton from "../components/Chatbot/ChatButton";
// import TopStrip from "./TopStrip"
 {/* <TopStrip/> */}



function Layout({ children }) {
  return (
    <div>
      <Navbar2/>
        <div className="">
            {children}
        </div>
        <ChatButton/>
        <Footer/>
    </div>
  )
}

export default Layout