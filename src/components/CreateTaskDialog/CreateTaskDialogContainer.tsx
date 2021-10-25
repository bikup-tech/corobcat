import { useSelector, useDispatch } from "react-redux";

import { Formik } from "formik";
import * as Yup from "yup";

import { TInitialState } from "../../redux/store/initialState";
import { setIsCreateTaskModalOpen } from "../../redux/actions/mainActions";
import CreateTaskDialog from "./CreateTaskDialog";

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
    selectedMachine: selectedMachine || 1,
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
      .min(1, "El valor mínimo es 1.")
      .max(10, "El valor máximo es 10.")
      .required("La prioridad es obligatoria."),
    duration: Yup.number()
      .integer("No puede contener decimales.")
      .required("La duración es obligatoria."),
    selectedMachine: Yup.number().required("La máquina es obligatoria."),
  });

  function handleCreateTaskFormSubmit(values: TCreateTaskDialogFormValues) {
    console.log("submitting");
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
