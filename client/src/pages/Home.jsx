import ContentWindow from "../components/ContentWindow";
import QueryView from "../components/QueryView";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-main-cont">
      <ContentWindow />
      <QueryView />
    </div>
  );
};

export default Home;
