import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import AdminCourseWriteUI from "./Presenter";
import { FETCH_CATEGORY, UPLOAD_FILE } from "./Queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { FIND_LECTURER } from "../../lecturer/list/Queries";

export default function AdminCourseWrite() {
  const router = useRouter();

  const [lectureCount, setLectureCount] = useState("");
  const [makeLecture, setMakeLecture] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");
  const [subCategoryValue, setSubCategoryValue] = useState("");
  const [subCategoryArr, setSubCategoryArr] = useState([]);
  const [lecturerSearchFlag, setLecturerSearchFlag] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [lecturerInfo, setLecturerInfo] = useState([
    {
      id: 0,
      name: "",
      email: "",
      phone: "",
      profile: "",
      image: "",
    },
  ]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const category = useQuery(FETCH_CATEGORY);
  const [lecturer] = useLazyQuery(FIND_LECTURER);

  const onChangeLecturerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "direct") {
      setLecturerSearchFlag(false);
    } else {
      setLecturerSearchFlag(true);
    }
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryValue(e.target.value);

    category.data?.fetchCategory.forEach((el: any) => {
      if (el.name === e.target.value) {
        setSubCategoryArr(el.subCategory);
      }
    });
  };
  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickSearch = async () => {
    setSearch(true);
    const { data } = await lecturer({
      variables: {
        name: searchValue.trim(),
      },
    });

    setLecturerInfo(data.findLecturer);
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

  const { handleSubmit, register, formState, setValue, getValues, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  console.log("Asdasd");
  const submitWrite = async (e: any) => {
    console.log(e);
    // try {
    //   setLoading(true);
    //   const files: any[] = [e.image?.[0]];
    //   const subTitle: string[] = ["강의 소개"];
    //   for (let i = 0; i <= Number(lectureCount); i++) {
    //     files.push(e[`file${i}`]?.[0]);
    //     if (i !== 0) {
    //       subTitle.push(e[`subTitle${i}`]?.[0].trim());
    //     }
    //   }
    //   await uploadFile({
    //     variables: {
    //       files,
    //       subTitle,
    //       category: categoryValue,
    //       subCategory: getValues("subCategory"),
    //       lecturer: e.lecturer.trim(),
    //       title: e.title.trim(),
    //       description: getValues("description"),
    //     },
    //   });
    //   setLoading(false);
    //   Modal.success({
    //     content: "강의 등록이 완료되었습니다. ",
    //     onOk() {
    //       router.push("/admin/courses");
    //     },
    //   });
    // } catch (error: any) {
    //   Modal.error({ content: error.message });
    // }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["clean"],
      ],
    },
  };

  const onChangeTextArea = (data: string) => {
    setValue("description", data === "<p><br></p>" ? "" : data);
    trigger("description");
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
      onClickSearch={onClickSearch}
      onChangeTextArea={onChangeTextArea}
      modules={modules}
      lecturerSearchFlag={lecturerSearchFlag}
      onChangeLecturerSearch={onChangeLecturerSearch}
      onChangeSearchValue={onChangeSearchValue}
      lecturerInfo={lecturerInfo}
      search={search}
    />
  );
}
