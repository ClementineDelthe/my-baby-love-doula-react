'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


const BackToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>

      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 border rounded-full px-4 py-2"
      >

      <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>

  );
};

export default BackToTopButton;
