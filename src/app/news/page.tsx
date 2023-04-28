import News from '@/components/News'

const NewsPage: React.FC = () => {
    return (
      <>
        <News isNewsPage={true} searchQuery={''} />
      </>
    );
  };
  
  export default NewsPage;
  