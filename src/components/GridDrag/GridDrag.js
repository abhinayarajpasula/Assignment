import React, { useState } from "react";
import { AgGridReact, AgGridColumn } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import SelectRenderer from "./SelectRenderer";

const PersonRenderer = props => {
  return <FontAwesomeIcon icon={faUserCircle} />;
};

const StatusRenderer = props => {
  console.log("StatusRendererProps", props);

  return (
    <SelectRenderer
      {...props}
      statusItems={["Working on it", "Stuck", "Waiting for review", "Done"]}
    />
  );
};

const PriorityRenderer = props => {
  return (
    <SelectRenderer
      {...props}
      statusItems={["Urgent", "High", "Medium", "Low"]}
    />
  );
};

const GridDrag = ({ data }) => {
  // eslint-disable-next-line
  const [rowData, setRowData] = useState(data);

  return (
    <div style={{ width: "100%", height: "20rem", marginBottom: "2rem" }}>
      <div
        id="myGrid"
        style={{
          height: "20rem",
          width: "100%"
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          modules={[ClientSideRowModelModule]}
          defaultColDef={{
            width: 170,
            autoHeight: true
          }}
          rowDragManaged={true}
          animateRows={true}
          rowData={rowData}
          frameworkComponents={{
            personRenderer: PersonRenderer,
            statusRenderer: StatusRenderer,
            priorityRenderer: PriorityRenderer
          }}
        >
          <AgGridColumn field="things to do" rowDrag={true}></AgGridColumn>
          <AgGridColumn
            field="owner"
            cellRenderer="personRenderer"
          ></AgGridColumn>
          <AgGridColumn
            field="status"
            cellRenderer="statusRenderer"
          ></AgGridColumn>
          <AgGridColumn field="due date"></AgGridColumn>
          <AgGridColumn
            field="priority"
            cellRenderer="priorityRenderer"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default GridDrag;
