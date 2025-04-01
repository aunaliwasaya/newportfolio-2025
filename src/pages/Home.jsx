import Profile from "../components/Profile";
import Projects from "../components/Projects";
import PortfolioModal from "./PortfolioModal";

export default function Home() {
  return (
    <>
  
    <Profile />


   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold"> {"Let's work together."}</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
        I master in Creating Amazing visually Appealing Designs that allows the Best User Experience Ever !  
        </p>
      </div>
    </>
  );
}
