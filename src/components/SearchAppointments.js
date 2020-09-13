import React from "react";

const SearchAppointments = ({
  orderBy,
  orderDir,
  changeOrder = (f) => f,
  searchApmts = (f) => f,
}) => {
  return (
    <div className="search-appointments row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchApts"
            type="text"
            className="form-control"
            aria-label="Search Appointments"
            onChange={(e) => searchApmts(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "petName" ? "active" : "")
                }
                onClick={() => changeOrder("petName", orderDir)}
                href="#"
              >
                Pet Name
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "aptDate" ? "active" : "")
                }
                onClick={(e) => changeOrder("aptDate", orderDir)}
                href="#"
              >
                Date
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "ownerName" ? "active" : "")
                }
                onClick={(e) => changeOrder("ownerName", orderDir)}
                href="#"
              >
                Owner
              </button>
              <div role="separator" className="dropdown-divider" />
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderDir === "asc" ? "active" : "")
                }
                onClick={(e) => changeOrder(orderBy, "asc")}
                href="#"
              >
                Asc
              </button>
              <button
                className={
                  "sort-by dropdown-item " +
                  (orderDir === "desc" ? "active" : "")
                }
                onClick={(e) => changeOrder(orderBy, "desc")}
                href="#"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAppointments;
