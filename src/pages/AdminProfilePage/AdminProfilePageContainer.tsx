import { FC } from "react";
import StandardLoading from "../../components/StandardLoading/StandardLoading";
import AdminProfilePage from "./AdminProfilePage";
import useAdminProfilePageQuery from "./queries/useAdminProfilePageQuery";

const AdminProfilePageContainer: FC = () => {
  const { isLoading, isError, data } = useAdminProfilePageQuery();

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
