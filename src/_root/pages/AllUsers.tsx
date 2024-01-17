

import { Models } from "appwrite";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";

import UserCard from "@/components/shared/UsersCard";

type UserCardProps = {
  user: Models.Document;
};


const AllUsers = ({ user }: UserCardProps) => {

  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);


  return (
   <div className="flex flex-1">
    <div className="home-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full"> All Users</h2>
        <div className="user-container">
         
          <div className="user-grid">
          {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator: Models.Document) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
  
            
          </div>
        </div>
        </div>
    </div>
   </div>
  )
}

export default AllUsers
