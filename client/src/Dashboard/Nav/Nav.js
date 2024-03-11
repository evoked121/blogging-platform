import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks/useUserDetails.js";
import { logout } from "../../shared/utils/logout.js";

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Nav = () => {
  const { isLogged, username } = useUserDetails();
  const navigate = useNavigate();

  const handleNavigateToAuth = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="nav-container">
      <div className="nav-buttons-container">
        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuth} />
        ) : (
          <div>
            <NavButton text="Log out" onClickHandler={handleLogout} />
            <span>{username}</span>

            <NavButton
              text="c-blog"
              onClickHandler={() => navigate("/create-blog")}
            />
            <NavButton
              text="p-blogs"
              onClickHandler={() => navigate("/personal-blogs")}
            />
          </div>
        )}

        <NavButton text="blogs" onClickHandler={() => navigate("/")} />
      </div>
    </div>
  );
};
