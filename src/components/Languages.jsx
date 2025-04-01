import { Progress } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Languages = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [urdu, setUrdu] = useState(0);
  const [english, setEnglish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (urdu < 98) {
        setUrdu((prevCount) => prevCount + 1);
      }
      if (english < 88) {
        setEnglish((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [urdu, english]);

  return (
    <div
      className={`flex flex-col space-y-1 pt-6 ${isDarkMode ? " text-white" : " text-black"}`}
    >
      <div className="flex flex-col gap-y-4">
        <span
          className={`text-xs font-bold ${isDarkMode ? "text-black" : "text-gray-700"}`}
        >
          Languages
        </span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor={isDarkMode ? "blue" : "purple"}
              type="circle"
              percent={urdu}
              size={75}
              format={() => (
                <span className={`text-xs font-bold ${isDarkMode ? "text-slate-100" : "text-black"}`}>
                  {urdu}%
                </span>
              )}
            />
            <span
              className={`text-xs font-bold ${isDarkMode ? "text-black" : "text-gray-700"}`}
            >
              Urdu
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor={isDarkMode ? "black" : "orange"}
              type="circle"
              percent={english}
              size={75}
              format={() => (
                <span className={`text-xs font-bold ${isDarkMode ? "text-slate-300" : "text-black"}`}>
                  {english}%
                </span>
              )}
            />
            <span
              className={`text-xs font-bold ${isDarkMode ? "text-black" : "text-gray-700"}`}
            >
              English
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
