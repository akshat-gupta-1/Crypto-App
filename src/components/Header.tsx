import Button from '../shared/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <IconContext.Provider value={{ className: 'color-change' }}>
      <div className="container mx-auto my-10 max-w-7xl flex justify-between px-8">
        <div className="text-text-color text-3xl font-bold font-heading ">
          COINFUSION
        </div>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ x: -800, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -800, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 right-0 bottom-0 bg-text-color"
            >
              <button
                className="absolute text-black font-bold text-3xl top-11 right-8 z-10"
                onClick={() => setActive(false)}
              >
                <FaTimes />
              </button>
              <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
                <ul className="space-y-10 text-black text-xl font-bold cursor-pointer flex flex-col fixed">
                  <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
                    Home
                  </li>
                  <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
                    Market
                  </li>
                  <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
                    Choose Us
                  </li>
                  <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
                    Join
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <ul className="space-x-10 text-text-color text-xl font-bold cursor-pointer hidden lg:flex">
          <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
            Home
          </li>
          <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
            Market
          </li>
          <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
            Choose Us
          </li>
          <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-button to-accent-color">
            Join
          </li>
        </ul>
        <div className="flex space-x-4 items-center ">
          <Button variant={'outline'} className="hidden xs:block">
            SIGN UP
          </Button>
          <Button className="hidden xs:block">LOG IN</Button>
          <button
            className="lg:hidden text-text-color text-3xl"
            onClick={() => setActive(true)}
          >
            <svg width="0" height="0">
              <linearGradient
                id="gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
                gradientTransform="rotate(90)"
              >
                <stop stopColor="#060218" offset="5%" />
                <stop stopColor="#e60fbb" offset="95%" />
              </linearGradient>
            </svg>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
