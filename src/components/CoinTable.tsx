import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CoinInfo } from '../types/ApiTypes';
const CoinTable = () => {
  const tableQuery = useQuery({
    queryKey: ['coinTable'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      return data as CoinInfo[];
    },
  });
  if (tableQuery.status === 'loading')
    return <h3 className="text-text-color">Loading</h3>;
  if (tableQuery.status === 'error')
    return <h3>{JSON.stringify(tableQuery.error)}</h3>;
  return (
    <div className="text-text-color">{JSON.stringify(tableQuery.data)}</div>
  );
};

export default CoinTable;
