import AdminProfilePage from "./AdminProfilePage";
import { FC } from "react";
import StandardLoading from "../../components/StandardLoading/StandardLoading";
import { TInitialState } from "../../redux/store/initialState";
import useAdminProfilePageQuery from "./queries/useAdminProfilePageQuery";
import { useSelector } from "react-redux";

const AdminProfilePageContainer: FC = () => {
  const { forceRender } = useSelector(
    (state: TInitialState) => state.mainReducer
  );
  const { isLoading, isError, data } = useAdminProfilePageQuery(forceRender);

  return (
    <>
      {isLoading ? (
        <StandardLoading />
      ) : (
        data && <AdminProfilePage settings={data} />
      )}
    </>
  );
};

export default AdminProfilePageContainer;
