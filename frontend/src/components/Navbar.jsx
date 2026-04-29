import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const active =
    "text-black font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black";
  const normal =
    "text-gray-500 hover:text-black transition duration-300";

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-[0.3em] uppercase hover:opacity-80 transition"
          >
            Nexaloom
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide font-medium">
            <Link to="/" className={location.pathname === "/" ? active : normal}>
              Home
            </Link>
            <Link to="/products" className={!category ? active : normal}>
              Shop
            </Link>
            <Link to="/products?category=Men" className={category === "Men" ? active : normal}>
              Men
            </Link>
            <Link to="/products?category=Women" className={category === "Women" ? active : normal}>
              Women
            </Link>
            <Link to="/products?category=Kids" className={category === "Kids" ? active : normal}>
              Kids
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* CART */}
            {isLoggedIn && (
              <Link
                to="/cart"
                className="relative hover:scale-110 transition duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
            )}

            {/* AUTH */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="hidden md:block text-sm border px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="hidden md:block text-sm border px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition"
              >
                Logout
              </button>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden hover:scale-110 transition"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <span className="text-sm tracking-widest font-medium text-gray-600">
            MENU
          </span>
          <button onClick={() => setOpen(false)} className="hover:rotate-90 transition">
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-6 gap-6 text-base font-medium">

          <Link to="/" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
            Home
          </Link>
          <Link to="/products" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
            Shop
          </Link>
          <Link to="/products?category=Men" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
            Men
          </Link>
          <Link to="/products?category=Women" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
            Women
          </Link>
          <Link to="/products?category=Kids" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
            Kids
          </Link>

          <hr />

          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
                Login
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart" onClick={() => setOpen(false)} className="hover:translate-x-1 transition">
                Cart
              </Link>
              <button
                onClick={handleLogout}
                className="text-left hover:translate-x-1 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;