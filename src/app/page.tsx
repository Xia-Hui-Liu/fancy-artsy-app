import PhotoAlbum from "@/components/PhotoAlbum";
import About from '@/components/About'
import Products from "@/components/Products";

const Home: React.FC = () => {
  return (
    <div>
      <PhotoAlbum />
      <div className="pb-24">
        <About isHomePage={true}/>
        <Products products={[]} />
      </div>
    </div>
  );
};


export default Home;
