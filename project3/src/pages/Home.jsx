import { DiaryStateContext } from "../App";
import Button from "../component/Button";
import Header from "../component/Header";
import { useState, useContext, useEffect } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  // ✅ 안전한 state 업데이트 방식 (이전 값 기준)
  const onIncreaseMonth = () => {
    setPivotDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
    });
  };

  const onDecreaseMonth = () => {
    setPivotDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
    });
  };

  // (선택) 현재 달 데이터 필터링
  useEffect(() => {
    if (!data) return;

    const startOfMonth = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth(),
      1,
    );

    const endOfMonth = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth() + 1,
      0,
    );

    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startOfMonth && itemDate <= endOfMonth;
    });

    setFilteredData(filtered);
  }, [data, pivotDate]);

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
    </div>
  );
};

export default Home;
