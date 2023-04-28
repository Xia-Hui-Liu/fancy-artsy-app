
type NewsProps = {
  isNewsPage: boolean
  searchQuery:string
}
const News: React.FC<NewsProps> = ({isNewsPage}) => {
    return (
      <>
        {isNewsPage ? (
           <p className="text-4xl font-bold text-center mt-60 ">
           Fancy Artsy Just Launched!
         </p>
        ):
        (
          <p className="text-sm">
          Fancy Artsy Just Launched!
        </p>
        )
        }
       </>
    );
  };
  
  export default News;
  