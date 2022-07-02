export const dataCategory = [
  {
    id: 1,
    name: "Toán học",
    image_url:
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2020/3/13/790705/Cau-Do-Toan-Hoc0-01.jpg",
    link: "/math",
  },
  {
    id: 2,
    name: "Văn học",
    image_url:
      "https://file.hstatic.net/200000232521/file/nhung-cau-li-luan-van-hoc-hay_50ca0478a65546b49ffbdf86ab7a76db.png",
    link: "/literary",
  },
  {
    id: 3,
    name: "Lịch sử",
    image_url:
      "https://luathoangphi.vn/wp-content/uploads/2021/12/vi-sao-phai-hoc-lich-su.jpg",
    link: "/history",
  },
  {
    id: 4,
    name: "Địa lý",
    image_url:
      "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/12d715c0b12911e69277c7d42f3bb41c.png",
    link: "/geography",
  },
  {
    id: 5,
    name: "Âm Nhạc",
    image_url:
      "https://vietthuongshop.vn/upload/content/images/Tuvan/2019/6-2019/tai-sao-am-nhac-dong-vai-tro-quan-trong-trong-cuoc-song-cua-con-nguoi-1.jpg",
    link: "/music",
  },
];

export const dataQuestionMath = [
  {
    id: 1,
    category_id: 1,
    title: "1 + 1 = ?",
    image_url:
      "https://www.qualityformationsblog.co.uk/wp-content/uploads/2020/05/QCF-1-1-.jpg",
    answers: [
      {
        id: 1,
        question_id: 1,
        content: "1",
        is_correct: false,
      },
      {
        id: 2,
        question_id: 1,
        content: "11",
        is_correct: false,
      },
      {
        id: 3,
        question_id: 1,
        content: "3",
        is_correct: false,
      },
      {
        id: 4,
        question_id: 1,
        content: "2",
        is_correct: true,
      },
    ],
  },
];
