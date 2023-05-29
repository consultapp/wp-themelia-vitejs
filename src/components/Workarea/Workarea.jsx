import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";

export default function Workarea() {
  return (
    <div id="main" className="main">
      <div className="grid-container">
        <div className="grid-100 grid-parent main-inner">
          <MainArea />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
