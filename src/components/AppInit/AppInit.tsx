import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadSettings } from "../../redux/actions/mainActions";

const AppInit: FC = () => {
  const dispatch = useDispatch();

  const { settings } = useSelector((state: any) => state.mainReducer);

  useEffect(() => {
    if (!settings || !settings.companyName) {
      dispatch(loadSettings());
    }
  }, [settings]);

  return <></>;
};

export default AppInit;
