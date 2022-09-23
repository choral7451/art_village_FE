export interface IAdminMemberUI {
  users: {
    id: string;
    email: string;
    name: string;
    membership: boolean;
    createdAt: string;
  }[];
}
