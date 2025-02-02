import { useGlobalState } from "@/context/UserContext";
import { CardUser } from "./CardUser";

const HomeContainer = ({data: users}) => {
	const { starredUsers } = useGlobalState();

    return <div className='flex justify-center flex-col items-center'>
    <div className='flex items-center flex-col w-full gap-4 mt-4'>
      {users.map((user, index) => (
        <CardUser
          key={`Paragraph${index}`}
          user={user}
          isStarred={starredUsers.includes(user?.id)}
        />
      ))}
    </div>
  </div>
}
 
export default HomeContainer;