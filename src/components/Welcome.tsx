import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/case_management");
    }, 2000);
  }, []);
  return (
    <div className="welcome">
      <div data-heading="WELCOME" className="centered">
        WELCOME TO CASE MANAGEMENT
      </div>
    </div>
  );
};

export default Welcome;
