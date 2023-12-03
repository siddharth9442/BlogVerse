import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileIcon } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow-lg bg-gray-800">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo className={'h-24 w-44 rounded-2xl'} />
            </Link>
          </div>
          <ul className="flex ml-auto text-white gap-5 items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="font-bold inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            { authStatus && (
                <li className="text-white">
                  <ProfileIcon />
                </li>
                )
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
