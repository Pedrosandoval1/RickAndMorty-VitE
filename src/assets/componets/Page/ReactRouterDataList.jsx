import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PictureDataList from "./PictureDataList";
import Character from "./Character";
import Error404 from "./Error404";


const ReactRouterDataList = ({ captureValue, info, DataImg }) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PictureDataList
                captureValue={captureValue}
                DataImg={DataImg}
                info={info}
              />
            }
          />
          <Route exact path="/character/:name" element={<Character />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ReactRouterDataList;
