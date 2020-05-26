import React from "react";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: [],
      loading: false,
    };
    this.getClassList = this.getClassList.bind(this);
  }

  getClassList() {
    this.setState({ loading: true });
    fetch("https://anywhere-fitness-ptbw.herokuapp.com/api/classes")
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          this.setState({ loading: false, classList: res.data });
        }, 2000);
      });
  }

  render() {
    const { classList, loading } = this.state;

    return (
      <div className="container App">
        <h4 className="d-inline-block">Class List</h4>
        <button
          className="btn btn-info float-right"
          onClick={this.getClassList}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Class List"}
        </button>
        <div className="clearfix"></div>

        <table class="table mt-3">
          <thead class="thead-dark">
            <th>ID</th>
            <th>Location</th>
            <th>Class Name</th>
            <th>Class Type</th>
            <th>Class Description</th>
            <th>Start Time</th>
            <th> Duration</th>
            <th>Intensity</th>
            <th>Registered</th>
            <th>Max Size</th>
            <th>Instructor Name</th>
          </thead>
          <tbody>
            {classList.map((x) => (
              <tr>
                <td>{x.id}</td>
                <td>{x.location}</td>
                <td>{x.class_name}</td>
                <td>{x.class_type}</td>
                <td>{x.class_desc}</td>
                <td>{x.start_time}</td>
                <td>{x.duration}</td>
                <td>{x.intensity}</td>
                <td>{x.registered}</td>
                <td>{x.max_size}</td>
                <td>{x.instructor_name}</td>
              </tr>
            ))}
            {classList.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashBoard;
