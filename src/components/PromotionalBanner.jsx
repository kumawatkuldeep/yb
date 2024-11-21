import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PromotionalMessages.module.css"; // Ensure this is the correct path

const PromotionalMessages = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsImagePopupOpen(true);
  };

  const handleCloseImagePopup = () => {
    setIsImagePopupOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl bg-white rounded-lg overflow-hidden mx-auto">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-full lg:w-1/2 p-4 lg:p-9">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-700 mb-4 leading-tight">Broadcast Promotional Messages (Officially)</h2>
              <div className="text-gray-700 text-lg mb-6 leading-relaxed pt-4 lg:pt-8">
                <p className="pb-4 lg:pb-7">Unlock Promotional Messaging with WhatsApp Business API</p>
                <p>WhatsApp now enables businesses to broadcast and automate promotional messages legally. Send exciting offers, discount codes, and festival wishes hassle-free, without risking your number being blocked!</p>
              </div>
            </div>
            <div>
              <ul className="list-none p-0">
                <Link to={"/book-demo"}>
                  <a className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-700" rel="noopener noreferrer">
                    <span className="mr-2 text-lg">Interesting?</span>
                    <span className="text-lg">Start Now for FREE</span>
                    <span className="ml-2">
                      <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                        <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero"></path>
                      </svg>
                    </span>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="object-cover w-full h-auto lg:h-full cursor-pointer"
              src="./images/broadcasdtim.webp"
              alt="API features WhatsApp screen"
              onClick={() => handleImageClick("./images/broadcasdtim.webp")} // Open image popup on click
            />
          </div>
        </div>
      </div>

      {/* Image Popup */}
      {isImagePopupOpen && (
        <div className={styles["popup-overlay"]} onClick={handleCloseImagePopup}>
          <div className={styles["popup-content"]} onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Promotional Message" className="max-w-full h-auto rounded-lg" />
            <button className={`${styles["close-popup"]} mt-4`} onClick={handleCloseImagePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionalMessages;
