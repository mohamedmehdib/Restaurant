import Navbar from "./Navbar";
import Hero from "./Hero";
import TopList from "./TopList";
import Banner from "./Banner";
import Contact from "./Contact";
import OurServices from "./OurServices";

export default function Home() {

  const bgStyle = {
    backgroundImage: `url(/2.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <Contact />
        <OurServices />
      </div>
    </div>
  );
}
