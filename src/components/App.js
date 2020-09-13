import React, { useState, useEffect } from "react";
import "../css/App.css";
import { without, findIndex } from "lodash";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

function App() {
  const [myAppointments, setMyAppointments] = useState([]);
  const [formDisplay, setFormDisplay] = useState(false);
  const [orderBy, setOrderBy] = useState("petName");
  const [orderDir, setOrderDir] = useState("asc");
  const [queryText, setQueryText] = useState("");

  // const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();

      setMyAppointments(data);
    };
    fetchData();
  }, []);

  const deletAppointment = (index) => {
    let newAppointments = without(myAppointments, myAppointments[index]);
    setMyAppointments(newAppointments);
  };

  const addAppointment = (apt) => {
    let tempApnts = myAppointments;
    tempApnts.unshift(apt);
    setMyAppointments(tempApnts);
  };

  const changeOrder = (order, dir) => {
    setOrderBy(order);
    setOrderDir(dir);
  };

  const searchApmts = (val) => {
    setQueryText(val);
  };

  const update = (name, value, id) => {
    let tempApts = myAppointments;
    let aptIndex = findIndex(myAppointments, {
      patdId: id,
    });
    tempApts[aptIndex][name] = value;
    setMyAppointments(tempApts);
  };

  let order;
  let filteredAppointments = myAppointments;
  if (orderDir === "asc") {
    order = 1;
  } else {
    order = -1;
  }

  let filteredApts = filteredAppointments
    .sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })
    .filter((eachItem) => {
      return (
        eachItem["petName"].toLowerCase().includes(queryText.toLowerCase()) ||
        eachItem["ownerName"].toLowerCase().includes(queryText.toLowerCase()) ||
        eachItem["aptNotes"].toLowerCase().includes(queryText.toLowerCase())
      );
    });

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments
                formDisplay={formDisplay}
                toggleForm={() => setFormDisplay(!formDisplay)}
                addAppointment={addAppointment}
              />
              <SearchAppointments
                changeOrder={changeOrder}
                orderBy={orderBy}
                orderDir={orderDir}
                searchApmts={searchApmts}
              />
              <ListAppointments
                update={update}
                appointments={filteredApts}
                deletAppointment={deletAppointment}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
