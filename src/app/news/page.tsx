import News from '@/components/News'
import Sidebar from '@/components/SideBar';

const NewsPage: React.FC = () => {
    return (
      <div className="flex flex-row mt-24 py-0 pb-24">
        <Sidebar />
        <News />
      </div>
    );
  };
  
  export default NewsPage;
  