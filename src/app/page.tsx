import Navbar from "@/components/NavBar";
import PhotoAlbum from "@/components/PhotoAlbum";
import About from '@/components/About'
import Footer from "@/components/Footer";
import Products from "@/components/Products";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center m-h-screen mt-24">
      <PhotoAlbum />
      <About isHomePage={true}/>
      <Products products={[]} />
    </div>
  );
};

export default Home;