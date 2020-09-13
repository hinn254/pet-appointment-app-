import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddAppointments = ({
  formDisplay,
  toggleForm,
  addAppointment = (f) => f,
}) => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [aptDate, setAptDate] = useState("");
  const [aptTime, setAptTime] = useState("");
  const [aptNotes, setAptNotes] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    let temApt = {
      petName: petName,
      ownerName: ownerName,
      //   combine  the date and time
      aptDate: aptDate + " " + aptTime,
      aptNotes: aptNotes,
    };
    addAppointment(temApt);

    // clear out the form
    setPetName("");
    setOwnerName("");
    setAptDate("");
    setAptTime("");
    setAptNotes("");
    // collapse the form
    toggleForm();
  };

  return (
    <div>
      <div
        className={
          "card textcenter mt-3 " + (formDisplay ? " " : "add-appointment")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={toggleForm}
        >
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Pet's Name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner's Name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={aptDate}
                  onChange={(e) => setAptDate(e.target.value)}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={aptTime}
                  onChange={(e) => setAptTime(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  value={aptNotes}
                  onChange={(e) => setAptNotes(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointments;
