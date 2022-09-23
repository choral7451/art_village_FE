import { UserSwitchOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import AdminMemberUI from "./Presenter";
import { FetchUsers } from "./Queries";

export default function AdminMemberCotainer() {
  const { data } = useQuery(FetchUsers);
  const users = data?.fetchUsers;

  return <AdminMemberUI users={users} />;
}
