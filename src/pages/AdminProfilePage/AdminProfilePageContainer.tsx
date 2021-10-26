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
        <AdminProfilePage
          correctionalFactors={{ machine1: 0.5, machine2: 0.1 }}
        />
      )}
    </>
  );
};

export default AdminProfilePageContainer;
