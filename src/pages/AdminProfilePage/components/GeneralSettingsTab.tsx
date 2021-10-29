import { FC, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Fab, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { TSettingsResponse } from "../../../types/settingsTypes";
import DeletableItemCard from "./DeletableItemCard";

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

const StyledButton = styled(Button)`
  min-width: unset;
  border-radius: 50%;
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

interface IGeneralSettingsTabProps {
  settings: TSettingsResponse;
}

const GeneralSettingsTab: FC<IGeneralSettingsTabProps> = ({ settings }) => {
  const correctionalFactorM1Ref = useRef(null);
  const correctionalFactorM2Ref = useRef(null);
  const newMaterialRef = useRef(null);
  const newThicknessRef = useRef(null);

  function handleDeleteMaterial() {}

  return (
    <StyledTabContainer className="tabContainer">
      <StyledGroupWrapper className="groupWrapper">
        {/* ---- CORRECTIONAL FACTORS ---- */}
        <StyledTabTitle>Editar factor corrector:</StyledTabTitle>
        <StyledNewItemWrapper>
          <TextField
            type="text"
            name="correctionalFactorMachine1"
            label="Máquina 1"
            placeholder="Nuevo factor corrector M1"
            size="small"
            sx={{ marginRight: "1rem" }}
            ref={correctionalFactorM1Ref}
            value={settings.correctionalFactorMachine1}
          />
          <StyledButton variant="contained" size="small" disableElevation>
            <SaveIcon fontSize="small" />
          </StyledButton>
        </StyledNewItemWrapper>
        <StyledNewItemWrapper>
          <TextField
            type="text"
            name="correctionalFactorMachine2"
            label="Máquina 2"
            placeholder="Nuevo factor corrector M2"
            size="small"
            sx={{ marginRight: "1rem" }}
            ref={correctionalFactorM2Ref}
          />
          <StyledButton variant="contained" size="small" disableElevation>
            <SaveIcon fontSize="small" />
          </StyledButton>
        </StyledNewItemWrapper>
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
          <StyledButton variant="contained" size="small" disableElevation>
            <AddIcon fontSize="small" />
          </StyledButton>
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
          <StyledButton variant="contained" size="small" disableElevation>
            <AddIcon fontSize="small" />
          </StyledButton>
        </StyledNewItemWrapper>
      </StyledGroupWrapper>
    </StyledTabContainer>
  );
};

export default GeneralSettingsTab;
