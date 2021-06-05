import Swal from "sweetalert2";
import "../assets/style/form.css";
import "../assets/style/global.css";
import { postPicture } from "../utils/api";
function Test() {
  const handleChange = async (event: any) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      const formArray: [string, string | File][] = Object.entries({ file });
      formArray.forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await postPicture(formData);
      if (res != false) {
        Swal.fire({
          title: res.data.result === "benign" ? "Benign" : "Malignant",
          text:
            res.data.result === "benign"
              ? "No need to worry! You are non-cancerous. Although if you continue to face problems, do consult a doctor. This result is just for indicative purpose."
              : "Our analysis indicate that you might have a cancer. Although consult a doctor for confirmation and further treatment. This result is just for indicative purpose.",
          imageUrl: "https://source.unsplash.com/400x200/?skincare,flower",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          buttonsStyling: false,
          customClass: { confirmButton: "button text-white px-5 py-2" },
        });
        console.log("Hi", res);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          buttonsStyling: false,
          customClass: { confirmButton: "button text-white px-5 py-2" },
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        buttonsStyling: false,
        customClass: { confirmButton: "button text-white px-5 py-2" },
      });
      console.log(err);
    }
  };
  return (
    <>
      <div style={{ paddingTop: 100, paddingLeft: 100, paddingRight: 20 }}>
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
            <input
              type="file"
              className="form-control-file"
              name="file"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
        </div>

        <br />

        <button className="button px-5 py-3 mb-5 text-white" type="submit">
          Submit & predict
        </button>
      </div>
    </>
  );
}

export default Test;
