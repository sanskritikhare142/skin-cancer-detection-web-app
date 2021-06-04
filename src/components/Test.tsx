import "../assets/style/form.css";
import "../assets/style/global.css";
function Test() {
  return (
    <>
      <form
        action="http://127.0.0.1:5000/uploader"
        method="POST"
        encType="multipart/form-data"
        style={{ paddingTop: 100, paddingLeft: 100, paddingRight: 20 }}
      >
        <div className="row">
          <div className="col-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="outlined-basic"
            />
          </div>

          <div className="col-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="outlined-basic"
            />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-2">
            <label className="text-align left">Gender</label>
          </div>
          <div className="col-10">
            <label className="form-check-label px-4">
              Male
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="gender"
              />
            </label>

            <label className="form-check-label px-4">
              Female
              <input
                type="radio"
                className="form-check-input"
                id="female"
                name="gender"
              />
            </label>
            <label className="form-check-label px-4">
              Other
              <input
                type="radio"
                className="form-check-input"
                id="other"
                name="gender"
              />
            </label>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-2">
            <label>Age (in years) </label>
            <input
              type="number"
              className="form-control"
              name="age"
              id="outlined-basic"
            />
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-2">
            <label className="text-align left">
              Upload Photo of infected area
            </label>
          </div>
          <div className="col-10">
            <input type="file" className="form-control-file" name="file" />
          </div>
        </div>

        <br />

        <button className="button px-5 py-3 mb-5 text-white" type="submit">
          Submit & predict
        </button>
      </form>
    </>
  );
}

export default Test;
