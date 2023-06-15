import { motion, spring } from 'framer-motion';
import CoinRow from '../components/CoinRow';
const HeroSection = () => {
  return (
    <div className="container mx-auto max-w-7xl lg:mt-28 mb-10 px-8 xs:mt-44 mt-44">
      <div className="grid lg:grid-cols-[minmax(720px,_1fr)_minmax(260px,_330px)] grid-cols-1 md:grid-cols-[minmax(100px,_130px)_minmax(500px,_1fr)_minmax(100px,_130px)]">
        <motion.img
          src="/imgs/tether.png"
          alt=""
          className="lg:hidden md:block hidden"
          animate={{ opacity: 1, y: [15, -15, 15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeIn',
            type: spring,
          }}
        />
        <h2 className="heading text-center lg:text-left text-text-color xl:text-7xl lg:text-6xl md:text-[44px] xs:text-5xl text-4xl font-bold leading-relaxed xl:leading-relaxed lg:leading-relaxed md:leading-relaxed xs:leading-relaxed uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-button to-accent-color">
            Crypto currency
          </span>{' '}
          made simple, secure, and profitable
        </h2>
        <motion.img
          src="/imgs/bitcoin.png"
          alt=""
          className="w-full justify-self-center self-center hidden lg:block"
          animate={{ opacity: 1, y: [30, -30, 30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeIn',
            type: spring,
          }}
        />
        <motion.img
          src="/imgs/ethereum.png"
          alt=""
          className="lg:hidden md:block hidden"
          animate={{ opacity: 1, y: [15, -15, 15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeIn',
            type: spring,
          }}
        />
      </div>
      <CoinRow />
    </div>
  );
};

export default HeroSection;
