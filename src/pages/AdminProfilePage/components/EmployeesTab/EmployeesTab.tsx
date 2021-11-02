import * as Yup from "yup";

import { Form, Formik } from "formik";

import CreateEmployeeForm from "./CreateEmployeeForm";
import DeletableItemCard from "../DeletableItemCard";
import { FC } from "react";
import { TUserResponse } from "../../../../types/employeeTypes";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledTabContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTabTitle = styled(Typography)`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-decoration: underline;
`;

const StyledEmployeesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: auto;
  align-content: flex-start;
`;

const StyledEmployeeCardContainer = styled.div`
  margin-right: 1rem;
  width: 20rem;
`;

const initialFormValues = {
  name: "",
  surname: "",
  employerCode: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Nombre obligatorio"),
  surname: Yup.string(),
  employerCode: Yup.string().required("Cod. Emp. obligatorio"),
});

function handleSubmit(values: any) {
  console.log(values);
  // TODO: Crear employer, fer forceRender
}

interface IEmployeesTabprops {
  employees: TUserResponse[];
}

const EmployeesTab: FC<IEmployeesTabprops> = ({ employees }) => {
  return (
    <StyledTabContainer className="tabContainer">
      <StyledTabTitle>Gestión de empleados</StyledTabTitle>
      <>
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form noValidate>
            <CreateEmployeeForm />
          </Form>
        </Formik>
      </>
      <StyledEmployeesContainer>
        {employees.map((employee) => (
          <StyledEmployeeCardContainer className="employeesList">
            <DeletableItemCard
              itemName={`(${employee.employerCode}): ${employee.name} `}
              handleDelete={() => {}}
              key={employee._id}
            />
          </StyledEmployeeCardContainer>
        ))}
      </StyledEmployeesContainer>
    </StyledTabContainer>
  );
};

export default EmployeesTab;
