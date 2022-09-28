import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import AdminCourseWriteUI from "./Presenter";
import { CREATE_LECTURE, FETCH_CATEGORY } from "./Queries";
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
  const [selectNum, setSelectNum] = useState("");
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

  const [createLecture] = useMutation(CREATE_LECTURE);
  const [lecturer] = useLazyQuery(FIND_LECTURER);
  const category = useQuery(FETCH_CATEGORY);

  const onChangeLecturerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "direct") {
      setLecturerSearchFlag(false);
    } else {
      setLecturerSearchFlag(true);
    }
  };

  const onChangeCategory = async (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "분류") {
      if (e.target.className.split(" ")[0] === "category") {
        setCategoryValue(e.target.value);
        const findCategory = category.data?.fetchCategory.filter(
          (el: any) => e.target.value === el.name
        );

        setSubCategoryArr(findCategory[0].subCategory);
        setValue("category", findCategory[0].id);
        setValue("subCategory", undefined);
        trigger("category");
        trigger("subCategory");
      } else if (e.target.className.split(" ")[0] === "subCategory") {
        setSubCategoryValue(e.target.value);

        const subCategory: any[] = subCategoryArr.filter((el: any) => {
          return el.name === e.target.value;
        });

        setValue("subCategory", subCategory[0].id);
        trigger("subCategory");
      }
    }
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
    setSelectNum("");
    setLecturerInfo(data.findLecturer);
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
    category: yup.number().test("nullable ", (value) => {
      return value !== undefined;
    }),
    subCategory: yup
      .number()
      .test("nullable ", "강의 소분류를 선택해주세요.", (value) => {
        return value !== undefined;
      }),
    title: yup.string().required("제목을 입력해주세요."),
    image: yup
      .mixed()
      .test("nullable", "강의 이미지를 첨부해주세요.", (value) => {
        return value.length > 0;
      })
      .test(
        "확장자 검사",
        "jpeg, png, webp, jpg 형식의 파일을 첨부해주세요.",
        (value) => {
          const extension = ["jpeg", "png", "webp", "jpg", "gif"];
          return extension.includes(value[0]?.name.split(".")[1].toLowerCase());
        }
      ),
    file0: yup
      .mixed()
      .test("nullable", "강의 소개영상을 첨부해주세요.", (value) => {
        return value.length > 0;
      }),
    description: yup.string().required("강의 설명을 기입해주세요."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setValue,
    getValues,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitWrite = async (data: any) => {
    try {
      setLoading(true);

      const files: any[] = [data.image?.[0]];
      const subTitle: string[] = ["강의 소개"];
      for (let i = 0; i <= Number(lectureCount); i++) {
        files.push(data[`file${i}`]?.[0]);
        if (i !== 0) {
          subTitle.push(data[`subTitle${i}`]?.[0].trim());
        }
      }
      await createLecture({
        variables: {
          files,
          subTitle,
          category: data.category,
          subCategory: data.subCategory,
          lecturer: Number(selectNum),
          title: data.title.trim(),
          description: getValues("description").trim(),
        },
      });
      setLoading(false);
      Modal.success({
        content: "강의 등록이 완료되었습니다. ",
        onOk() {
          router.push("/admin/courses/lecture/list");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
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

  useEffect(() => {
    register("description", { required: true });
  }, []);

  const onChangeTextArea = (data: string) => {
    setValue("description", data === "<p><br></p>" ? "" : data);
    trigger("description");
  };

  const onChangeSelect = (num: string) => () => {
    setSelectNum(num);
  };

  return (
    <AdminCourseWriteUI
      lectureCount={lectureCount}
      makeLecture={makeLecture}
      onClickLectureMake={onClickLectureMake}
      onChangeLectureCount={onChangeLectureCount}
      submitWrite={submitWrite}
      handleSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      register={register}
      loading={loading}
      category={category.data?.fetchCategory}
      categoryValue={categoryValue}
      subCategoryValue={subCategoryValue}
      onChangeCategory={onChangeCategory}
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
      onChangeSelect={onChangeSelect}
      selectNum={selectNum}
    />
  );
}
