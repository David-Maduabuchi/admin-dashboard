import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      {/* In the original design, the logo is at the top of the menu bar, */}
      {/* This could still work tho, let me trust the teacher */}
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>KhanRecords</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg " alt="" className="icon" />
        {/* Notification Icon */}
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        {/* Supposed search box */}
        <div className="user">
          <img src="/images/oneechan.jpg" alt="" />
          <span>Jane</span>
        </div>
        {/* settings icon, I really have to find this libray containing all these icons */}
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
