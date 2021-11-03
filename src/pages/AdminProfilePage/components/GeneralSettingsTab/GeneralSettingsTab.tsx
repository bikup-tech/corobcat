import * as Yup from "yup";

import { Button, Fab, IconButton, TextField, Typography } from "@mui/material";
import { FC, useRef } from "react";
import { Form, Formik } from "formik";

import AddIcon from "@mui/icons-material/Add";
import DeletableItemCard from "../DeletableItemCard";
import EditCorrectionalFactorFrom from "./EditCorrectionalFactorForm";
import FormikTextField from "../../../../components/FormikComponents/FormikTextField";
import SaveIcon from "@mui/icons-material/Save";
import { TSettingsResponse } from "../../../../types/settingsTypes";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledTabContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}))`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
`;

const StyledGroupWrapper = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 20rem;
`;

const StyledNewItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const StyledButtonWrapper = styled.div`
  flex: 1;
  .MuiButton-root {
    min-width: unset;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const StyledTabTitle = styled(Typography)`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 100%;
`;

const validationSchema = Yup.object({
  correctionalFactorMachine1: Yup.number()
    .integer("No puede contener decimales")
    .min(0, "El valor mínimo es 0")
    .max(100, "El valor máximo es 100"),

  correctionalFactorMachine2: Yup.number()
    .integer("No puede contener decimales")
    .min(0, "El valor mínimo es 0")
    .max(100, "El valor máximo es 100"),
});

interface IGeneralSettingsTabProps {
  settings: TSettingsResponse;
}

const GeneralSettingsTab: FC<IGeneralSettingsTabProps> = ({ settings }) => {
  const newMaterialRef = useRef(null);
  const newThicknessRef = useRef(null);

  const correctionalFactorInitialValues = {
    correctionalFactorMachine1: settings.correctionalFactorMachine1,
    correctionalFactorMachine2: settings.correctionalFactorMachine2,
  };

  function handleDeleteMaterial() {}

  function handleDeleteThickness() {}

  return (
    <StyledTabContainer className="tabContainer">
      <StyledGroupWrapper className="groupWrapper">
        {/* ---- CORRECTIONAL FACTORS ---- */}
        <Formik
          initialValues={correctionalFactorInitialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          <Form noValidate>
            <EditCorrectionalFactorFrom />
          </Form>
        </Formik>
      </StyledGroupWrapper>
      {/* ---- MATERIALS LIST ---- */}
      <StyledGroupWrapper className="groupWrapper">
        <StyledTabTitle>Lista de materiales:</StyledTabTitle>
        <StyledNewItemWrapper>
          <TextField
            type="text"
            name="material"
            label="Material"
            placeholder="Nuevo material"
            size="small"
            sx={{ marginRight: "1rem" }}
            ref={newMaterialRef}
          />
          <StyledButtonWrapper>
            <Button variant="contained" size="small" disableElevation>
              <AddIcon fontSize="small" />
            </Button>
          </StyledButtonWrapper>
        </StyledNewItemWrapper>
        <StyledListWrapper className="itemsList">
          {settings.materials.map((material) => (
            <DeletableItemCard
              itemName={material}
              handleDelete={handleDeleteMaterial}
              key={material}
            />
          ))}
        </StyledListWrapper>
      </StyledGroupWrapper>
      {/* ---- THICKNESSESS LIST ---- */}
      <StyledGroupWrapper className="groupWrapper">
        <StyledTabTitle>Lista de espesores</StyledTabTitle>
        <StyledNewItemWrapper>
          <TextField
            type="text"
            name="thickness"
            label="Espesor"
            placeholder="Nuevo espesor"
            size="small"
            sx={{ marginRight: "1rem" }}
            ref={newThicknessRef}
          />
          <StyledButtonWrapper>
            <Button variant="contained" size="small" disableElevation>
              <AddIcon fontSize="small" />
            </Button>
          </StyledButtonWrapper>
        </StyledNewItemWrapper>
        <StyledListWrapper className="itemsList">
          {settings.thicknesses.map((value) => (
            <DeletableItemCard
              itemName={`${value} mm`}
              handleDelete={handleDeleteThickness}
              key={value}
            />
          ))}
        </StyledListWrapper>
      </StyledGroupWrapper>
    </StyledTabContainer>
  );
};

export default GeneralSettingsTab;
