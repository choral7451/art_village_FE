import AdminLecturerListUI from "./Presenter";
import { useRouter } from "next/router";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FETCH_LECTURERS, FIND_LECTURER } from "./Queries";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function AdminLecturerList() {
  const router = useRouter();
  const lecturers = useQuery(FETCH_LECTURERS);
  const [search, setSearch] = useState(false);
  const [findLecturer] = useLazyQuery(FIND_LECTURER);
  const [lecturer, setLecturer] = useState("");
  const [selectNum, setSelectNum] = useState("");

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  const onSearch = async (value: any) => {
    setSearch(true);
    const { data } = await findLecturer({
      variables: {
        name: value.search,
      },
    });
    setLecturer(data);
  };

  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onChangeSelect = (num: string) => () => {
    setSelectNum(num);
  };

  return (
    <AdminLecturerListUI
      onClickPush={onClickPush}
      search={search}
      lecturers={lecturers.data?.fetchLecturers}
      handleSubmit={handleSubmit}
      register={register}
      lecturer={lecturer.findLecturer}
      onSearch={onSearch}
      onChangeSelect={onChangeSelect}
    />
  );
}
