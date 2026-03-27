import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <>
      <div>{id}번 일기</div>
      <div>Diary 페이지입니다</div>;
    </>
  );
};
export default Diary;
