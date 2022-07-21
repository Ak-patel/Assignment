import Loading from "./feature/Loading";
import Posts from "./feature/Posts";
import UserList from "./feature/UserList";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-grid col-md-4">
          <UserList />
          <Loading />
        </div>
        <div className="col-md-8">
          <Posts />
        </div>
      </div>
    </div>
  )
};