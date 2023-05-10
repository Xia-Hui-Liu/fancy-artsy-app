"use client"
import About from "@/components/About";
import SideBar from "@/components/SideBar"

const AboutPage: React.FC = () => {
  return (
      <div className="flex flex-row mt-28">
        <SideBar />
        <About isHomePage={false} />
      </div>
  )}
  
  export default AboutPage
