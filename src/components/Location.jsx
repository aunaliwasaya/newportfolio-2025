import { DETAILS } from '../data/constants';
import { getObjectKeys } from '../data/utils';

import { useSelector, useDispatch } from "react-redux";

const Location = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const keys = getObjectKeys(DETAILS);
  return (
    <div className='flex flex-col space-y-1 py-1'>

      {keys.map((key, index) => {
        return (
          <div key={index} className='flex items-center justify-between '>
            <span   className={`text-xs font-bold ${
    isDarkMode ? "text-black" : "text-blue-950"
  }`}>{key}</span>
            <span 
  className={`text-xs  ${
    isDarkMode ? "text-slate-300" : "text-gray-700"
  }`}
>
  {DETAILS[key]}
</span>

          </div>
        );
      })}
    </div>
  );
};

export default Location;
