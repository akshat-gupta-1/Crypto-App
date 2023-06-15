import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
interface Props {
  img: string;
  id: string;
  currentPrice: number;
  changePercentage: number;
  key: number;
}
const CoinCard = ({ img, id, currentPrice, changePercentage, key }: Props) => {
  return (
    <IconContext.Provider
      value={{
        className: `inline text-2xl ${
          changePercentage < 0 ? 'text-red-500' : 'text-green-500'
        }`,
      }}
    >
      <div key={key} className="space-y-4">
        <img src={img} alt="" className="w-28 h-28" />
        <div className="text-center font-medium text-xl space-y-1">
          <h4 className="capitalize font-bold">{id}</h4>
          <h4
            className={`${
              changePercentage < 0 ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {changePercentage < 0 ? <FaCaretDown /> : <FaCaretUp />}{' '}
            {changePercentage.toFixed(3)}
          </h4>
          <h4>
            <span>Rs</span>{' '}
            {currentPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h4>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default CoinCard;
