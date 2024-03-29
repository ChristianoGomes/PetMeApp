
import Loader from './Loader';
import GridPostList from './GridPostLists';


type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: any;
}

const SearchResults = ({isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if(isSearchFetching) return <Loader />

    if(searchedPosts && searchedPosts.documents.length > 0) {
        return ( 
            <GridPostList posts={searchedPosts.documents} />
         )
        
    } else {
  return (
    <div>
      <p className='text-light-4 mt-10 text-center w-full '>No Results Found</p>
    </div>
  )
    }
}

export default SearchResults
