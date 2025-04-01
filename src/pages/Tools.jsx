import { TECH_STACK } from '../data/constants';

const Tools = () => {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Tools</span>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((item, index) => (
            <span 
              key={index} 
              className="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
