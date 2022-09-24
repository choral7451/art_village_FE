import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import AdminCourseWriteUI from "./Presenter";
import { FETCH_CATEGORY, UPLOAD_FILE } from "./Queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

export default function AdminCourseWrite() {
  const router = useRouter();

  const [lectureCount, setLectureCount] = useState("");
  const [makeLecture, setMakeLecture] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");
  const [subCategoryValue, setSubCategoryValue] = useState("");
  const [subCategoryArr, setSubCategoryArr] = useState([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const category = useQuery(FETCH_CATEGORY);

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryValue(e.target.value);

    category.data?.fetchCategory.forEach((el: any) => {
      if (el.name === e.target.value) {
        setSubCategoryArr(el.subCategory);
      }
    });
  };

  const onChangeSubCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubCategoryValue(e.target.value);
  };

  const onChangeLectureCount = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureCount(e.target.value);
  };

  const onClickLectureMake = () => {
    if (!isNaN(Number(lectureCount)) && lectureCount !== "") {
      setMakeLecture(Number(lectureCount));
      Modal.success({ content: `강의 ${lectureCount}개가 생성되었습니다.` });
    } else {
      Modal.error({ content: "숫자를 입력해주세요." });
      setLectureCount("");
    }
  };

  const schema = yup.object({
    lecturer: yup.string().required("이름을 입력해 주세요."),
    subCategory: yup.string().required("소분류를 선택해 주세요."),
    title: yup.string().required("제목을 입력해주세요."),
    image: yup.mixed().required("이미지를 등록해주세요."),
    description: yup.string().required("강의 설명을 기입해주세요."),
  });

  const { handleSubmit, register, formState, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitWrite = async (e: any) => {
    try {
      setLoading(true);

      const files: any[] = [e.image?.[0]];
      for (let i = 0; i <= Number(lectureCount); i++) {
        files.push(e[`file${i}`]?.[0]);
      }

      await uploadFile({
        variables: {
          files,
          category: categoryValue,
          subCategory: getValues("subCategory"),
          lecturer: e.lecturer.trim(),
          title: e.title.trim(),
          description: e.description.trim(),
        },
      });

      setLoading(false);

      Modal.success({
        content: "강의 등록이 완료되었습니다. ",
        onOk() {
          router.push("/admin/courses");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <AdminCourseWriteUI
      lectureCount={lectureCount}
      makeLecture={makeLecture}
      onClickLectureMake={onClickLectureMake}
      onChangeLectureCount={onChangeLectureCount}
      submitWrite={submitWrite}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
      loading={loading}
      category={category.data?.fetchCategory}
      categoryValue={categoryValue}
      subCategoryValue={subCategoryValue}
      onChangeCategory={onChangeCategory}
      onChangeSubCategory={onChangeSubCategory}
      subCategoryArr={subCategoryArr}
      setValue={setValue}
    />
  );
}
