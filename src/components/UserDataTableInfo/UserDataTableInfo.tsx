import React from "react";
import { TUserResponse } from "../../types/employeeTypes";
import "./UserDataTableInfo.scss";
import { useHistory } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";

interface IUserDataTableInfoProps {
  employee: TUserResponse | undefined;
}

function UserDataTableInfo(props: IUserDataTableInfoProps) {
  const { employee } = props;
  const history = useHistory();

  return (
    <div className="user-data-table-container">
    <div className="user-data-table">
      <IconButton onClick={() => history.goBack()} aria-label="goBack">
        <ArrowBackIcon />
      </IconButton>
      <p className="user-data-table__info--name">{employee?.name}</p>
      <p className="user-data-table__info">{employee?.employerCode}</p>
      </div>
    </div>
  );
}

export default UserDataTableInfo;
