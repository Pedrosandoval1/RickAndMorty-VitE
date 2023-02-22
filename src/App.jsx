import { useState, useEffect, useCallback, useMemo } from "react";
import * as trya from "./assets/componets/ApiData";
import SearchCharacter from "./assets/componets/SearchCharacter/SearchCharacter";
import ReactRouterDataList from "./assets/componets/Page/ReactRouterDataList";
import "./App.css";

function App() {
  const [captureValue, setCaptureValue] = useState([]);
  const [info, setInfo] = useState({});

  const DataImg = useCallback(async (pague) => {
    const listValue = await trya.FetchImage(pague);
    setCaptureValue(listValue.data.results);
    setInfo(listValue.data.info);
  }, []);

  const DataSearch = useCallback(async (title) => {
    const listValue = await trya.FetchSearch(title);
    setCaptureValue(listValue.data.results);
  }, []);

  useEffect(() => {
    DataImg();
  }, [DataImg]);
  const memoizedDataImg = useMemo(() => DataImg, [DataImg]);
  const memoizedDataSearch = useMemo(() => DataSearch, [DataSearch]);
  return (
    <>
      <div className="grid grid-cols-6  grid-row-3   ">
        <div className="col-start-3 max-sm:col-start-2 max-sm:col-end-6  col-end-5 text-center">
          <SearchCharacter dataSearch={memoizedDataSearch} />
        </div>

        <div className="grid grid-cols-1 gap-10 col-start-2 max-sm:col-start-1 max-sm:col-end-7 col-end-6 max-lg:gap-2  ">
          <ReactRouterDataList
            captureValue={captureValue}
            DataImg={memoizedDataImg}
            info={info}
          />
        </div>
      </div>
    </>
  );
}

export default App;
