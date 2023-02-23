import { Outlet } from "react-router-dom";

export default function ServicesTour() {
  return (
    <>
      <div className="container" style={{background:"yellow"}}>
        <span className="section__content">Services Section</span>
      </div>

      <Outlet />
    </>
  );
}
