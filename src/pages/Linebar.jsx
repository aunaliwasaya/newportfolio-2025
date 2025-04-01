import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const LinearBar = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const data = [
        { title: 'React', percent: 95, bgColor: 'bg-blue-500' },
        { title: 'JavaScript', percent: 90, bgColor: 'bg-yellow-500' },
        { title: 'CSS', percent: 95, bgColor: 'bg-green-500' },
        { title: 'HTML', percent: 97, bgColor: 'bg-red-500' },
        { title: 'MERN Stack Developer', percent: 80, bgColor: 'bg-purple-500' },
        { title: 'WordPress', percent: 85, bgColor: 'bg-indigo-500' },
        { title: 'Shopify', percent: 85, bgColor: 'bg-pink-500' },
        { title: 'Custom Development', percent: 95, bgColor: 'bg-teal-500' },
        { title: 'SquareSpace', percent: 90, bgColor: 'bg-orange-500' },
        { title: 'GoHighLevel', percent: 90, bgColor: 'bg-blue-700' }
    ];

    return (
        <div className="p-2">
                    <p className={`text-xs font-bold mb-5 ${
    isDarkMode ? "text-gray-800" : "text-blue-950"
  }` } >skills:</p>
            {data.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-xs text-blue-950 ">{item.title}</span>
                        <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-black'}`}>
  {item.percent}%
</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div
                            className={`${item.bgColor} h-2 rounded-full`}
                            style={{ width: `${item.percent}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LinearBar;
