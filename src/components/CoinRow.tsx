import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import { CoinInfo } from '../types/ApiTypes';
import CoinCard from '../shared/CoinCard';
const CoinRow = () => {
  const rowVariants: Variants = {
    initial: { y: -50, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom, duration: 1, type: 'spring' },
    }),
  };
  const { data, isLoading, isError, error, status } = useQuery({
    queryKey: ['coins'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      return data as CoinInfo[];
    },
  });
  if (status === 'loading')
    return (
      <div className="grid-cols-1 content-center justify-items-center">
        Loading..
      </div>
    );
  if (status === 'error')
    return <h1 className="text-white">{JSON.stringify(error)}</h1>;
  return (
    <div className="text-text-color grid md:grid-cols-4 justify-items-center content-center mt-32 sm:grid-cols-2 gap-y-6 md:gap-y-0 xs:grid-cols-1">
      {data
        .filter((item, index) => index < 4)
        .map((filteredArray, i) => {
          return (
            <motion.div
              variants={rowVariants}
              initial="initial"
              animate="animate"
              custom={(i + 1) * 0.2}
            >
              <CoinCard
                key={i}
                id={filteredArray.id}
                img={filteredArray.image}
                currentPrice={filteredArray.current_price}
                changePercentage={filteredArray.price_change_percentage_24h}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default CoinRow;
