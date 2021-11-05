import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import CreateTaskDialog from "./CreateTaskDialog";
import { Formik } from "formik";
import { TInitialState } from "../../redux/store/initialState";
import { setIsCreateTaskModalOpen } from "../../redux/actions/mainActions";

function CreateTaksDialogContainer() {
  const dispatch = useDispatch();

  const { isOpen, selectedMachine } = useSelector(
    (state: TInitialState) => state.mainReducer.createTaskModal
  );

  function handleClose() {
    dispatch(setIsCreateTaskModalOpen(false));
  }

  const initialValues = {
    employee: "",
    material: "",
    thickness: 0,
    programNumber: "",
    priority: 1,
    duration: 0,
    correctionalFactor: 10,
    selectedMachine: selectedMachine || "máquina1",
  };

  const validationSchema = Yup.object({
    employee: Yup.string().required("El código de empleado es obligatorio."),
    material: Yup.string().required("El material es obligatorio."),
    programNumber: Yup.string().required(
      "El número de programa es obligatorio."
    ),
    thickness: Yup.number()
      .integer("No puede contener decimales.")
      .min(0, "No puede ser negativo.")
      .required("El espesor es obligatorio."),
    priority: Yup.number()
      .integer("No puede contener decimales.")
      .min(1, "El valor mínimo es 1.")
      .max(10, "El valor máximo es 10.")
      .required("La prioridad es obligatoria."),
    duration: Yup.number()
      .integer("No puede contener decimales.")
      .required("La duración es obligatoria."),
    selectedMachine: Yup.string().required("La máquina es obligatoria."),
  });

  function handleCreateTaskFormSubmit(values: TCreateTaskDialogFormValues) {
    handleClose();
  }

  type TCreateTaskDialogFormValues = typeof initialValues;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCreateTaskFormSubmit}
      validationSchema={validationSchema}
    >
      <CreateTaskDialog isOpen={isOpen} handleClose={handleClose} />
    </Formik>
  );
}

export default CreateTaksDialogContainer;
