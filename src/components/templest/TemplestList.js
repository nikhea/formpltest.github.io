import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTemplest } from "../api/TemplestAPI";
const TemplestList = (props) => {
  const dispatch = useDispatch();
  const { templestList, loading, errorMessage } = useSelector(
    (state) => state.templestsReducer
  );

  useEffect(() => {
    dispatch(fetchTemplest());
  }, [dispatch]);


  return (
    <div>
      TemplestList
      {loading ? (
        "loading"
      ) : (
        <div>
 
          {templestList.map((templestList, index) => {
       
      })}
        </div>
      )}
    </div>
  );
};

export default TemplestList;
