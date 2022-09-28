export interface ILecturer {
  data: {
    id?: number;
    name: string;
    email?: string;
    phone?: string;
    image: string;
    profile: string;
  };
  type: "basic" | "select";
  key?: string;
  change?: any;
  check?: string;
}
