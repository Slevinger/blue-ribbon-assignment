import React, { useContext, useState, useCallback, useMemo } from "react";
import MaterialTable from "material-table";
import { Context as FlightsContext } from "../context/flights";
import { tableIcons } from "./utils/icons";
import AddBox from "@material-ui/icons/AddBox";
import Dialog from "./Dialog";
import CreateFlightForm from "../Forms/CreateFlightForm";

export default () => {
  const {
    state: { flights },
    ...actions
  } = useContext(FlightsContext);
  const { addFlight, removeFlight, updateFlight, setError } = actions;
  const [open, setOpen] = useState(false);
  const state = useMemo(
    () => ({
      columns: [
        { title: "From", field: "from", type: "number" },
        {
          title: "To",
          field: "to",
          type: "number"
        },
        { title: "Depart,", field: "departureTime​,", type: "date" },
        { title: "Land", field: "landingTime​,", type: "date" },
        {
          title: "Price",
          field: "price",
          type: "number"
        }
      ]
    }),
    []
  );

  return (
    <>
      <Dialog open={open} setOpen={setOpen}>
        <CreateFlightForm columns={state.columns} />
      </Dialog>
      <MaterialTable
        title={"Flights Table"}
        columns={state.columns}
        data={Object.values(flights)}
        icons={{
          ...tableIcons,
          Add: props => (
            <AddBox
              fontSize="large"
              color="secondary"
              {...props}
              onClick={e => {
                debugger;
                console.log("click");
                setOpen(true);
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          )
        }}
        editable={{
          onRowAdd: async newData => {
            console.log("addRow", newData);
            debugger;
            await addFlight(newData);
          },
          onRowUpdate: async (newData, oldData) => {
            console.log("addRow", oldData.id, newData);
            await updateFlight({ vastId: oldData.id, ...newData });
          },
          onRowDelete: async oldData => {
            console.log("removeRow", oldData.id);
            await removeFlight(oldData.id);
          }
        }}
      />
    </>
  );
};
