import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

const ListAppointments = ({
  appointments,
  deletAppointment = (f) => f,
  update = (f) => f,
}) => {
  return (
    <div className="appointment-list item-list mb-3">
      {appointments.map((item, i) => (
        <div key={i} className="pet-item col media py-3">
          <div className="mr-3">
            <button
              className="pet-delete btn btn-sm btn-danger"
              onClick={() => deletAppointment(i)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span
                className="pet-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => update("petName", e.taget.innerHTML, item.i)}
              >
                {item.petName}
              </span>
              <span className="apt-date ml-auto">
                <Moment
                  date={item.aptDate}
                  parse="YYYY-MM-DD hh:mm"
                  format="MMM-D h:mma"
                />
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span
                onBlur={(e) => update("ownerName", e.taget.innerHTML, item.i)}
              >
                {item.ownerName}
              </span>
            </div>
            <div
              onBlur={(e) => update("aptNotes", e.taget.innerHTML, item.i)}
              className="apt-notes"
            >
              {item.aptNotes}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAppointments;
