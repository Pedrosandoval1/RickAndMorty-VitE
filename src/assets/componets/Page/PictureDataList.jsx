import DataList from "../DataList/DataList";
import Pagination from "../Pagination/Pagination";

const PictureDataList = ({ captureValue, info, DataImg }) => {
  const onPreviuos = () => {
    DataImg(info.prev);
  };
  const onNext = () => {
    DataImg(info.next);
  };
  return (
    <div>
      <DataList captureValue={captureValue} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPreviuos={onPreviuos}
        onNext={onNext}
      />
    </div>
  );
};

export default PictureDataList;
