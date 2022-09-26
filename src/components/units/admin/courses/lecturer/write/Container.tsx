import AdminLecturerWriteUI from "./Presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LECTURER } from "./Queries";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function AdminLecturerWrite() {
  const router = useRouter();
  const [lecturer] = useMutation(CREATE_LECTURER);
  const [loading, setLoading] = useState(false);
  const [profileErr, setProfileErr] = useState("");

  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@\w+\.\w+/, "이메일 형식이 맞지 않습니다.")
      .required("이메일을 입력해 주세요"),
    name: yup
      .string()
      .max(10, "이름은 10자를 넘을 수 없습니다.")
      .required("이름을 입력해주세요"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "숫자만 입력해주세요.")
      .required("연락처를 입력해주세요."),
    image: yup.mixed().required("프로필사진을 첨부해주세요."),
    profile: yup.string().required(),
  });

  const { handleSubmit, register, formState, setValue, getValues, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

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

  const onChangeProfile = (data: string) => {
    setValue("profile", data === "<p><br></p>" ? "" : data);
    trigger("profile");

    if (!getValues("profile")) {
      setProfileErr("프로필을 기입해주세요.");
    } else {
      setProfileErr("");
    }
  };

  const onClickRegister = async (data: any) => {
    setLoading(true);

    console.log(data.phone);

    await lecturer({
      variables: {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone,
        profile: data.profile.trim(),
        image: [data.image[0]],
      },
    });

    setLoading(false);

    Modal.success({
      content: "강의 등록이 완료되었습니다. ",
      onOk() {
        router.push("/admin/courses/lecturer/list");
      },
    });
  };

  return (
    <AdminLecturerWriteUI
      modules={modules}
      register={register}
      formState={formState}
      profileErr={profileErr}
      handleSubmit={handleSubmit}
      onChangeProfile={onChangeProfile}
      getValues={getValues}
      onClickRegister={onClickRegister}
      loading={loading}
    />
  );
}
