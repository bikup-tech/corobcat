import { FC } from "react";

type TCorrectionalFactors = {
  machine1: number;
  machine2: number;
};

interface IAdminProfilePageProps {
  correctionalFactors: TCorrectionalFactors;
}

const AdminProfilePage: FC<IAdminProfilePageProps> = ({
  correctionalFactors,
}) => {
  return <></>;
};

export default AdminProfilePage;
