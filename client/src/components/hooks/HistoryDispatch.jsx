import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const HistoryDispatch = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    return [history, dispatch]
};

export default HistoryDispatch;