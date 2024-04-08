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

        <motion.div className="mobile-bar" onClick={()=>setOpen(!open)}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            transition: 5
          }}
        
        >
          <img src="./bars-solid.svg" alt="" />
        </motion.div>

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
            <img style={{marginTop:'40px'}} src="./Group.svg" alt="" />
          </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
