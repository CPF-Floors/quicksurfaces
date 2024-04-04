import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "../scss/Header.scss";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>

        <img src="./Group146.svg" alt="" />

        <div className="mobile-bar" onClick={()=>setOpen(!open)}>
          <img src="./bars-solid.svg" alt="" />
        </div>

        <nav className="desktop-nav">
          <Link>Specifications</Link>
          <Link>Collections</Link>
          <Link>Roomvo</Link>
          <Link>Contact Us</Link>
        </nav>

        <AnimatePresence initial={false}>
          {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 400, transform: 200}}
            exit={{opacity:0, height: 0}}
          >
            <Link>Specifications</Link>
            <Link>Collections</Link>
            <Link>Roomvo</Link>
            <Link>Contact Us</Link>
          </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
