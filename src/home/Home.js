import "./home.css"
import Sidebar from "./main/Main";
import Main from "./sidebar/Sidebar";

function Home() {
  return (
    <div className="home">
      <Main />
      <Sidebar />
    </div>
  )
};

export default Home;