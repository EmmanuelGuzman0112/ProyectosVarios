import { FunctionComponent } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {
  getWeather: any; //funcion
};

const WeatherForm: FunctionComponent<Props> = ({ getWeather }) => {
  return (
    <div className="card card-body">
      <Formik
        initialValues={{ latitude: "", longitude: "" }}
        validationSchema={Yup.object().shape({
          latitude: Yup.string().required("Latitude is required"),
          longitude: Yup.string().required("Longitude is required"),
        })}
        onSubmit={(values) => getWeather(values.latitude, values.longitude)}
      >
        <Form>
          <div className="form-group">
            <Field
              type="text"
              id="latitude"
              name="latitude"
              placeholder="Latitude"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <Field
              type="text"
              id="longitude"
              name="longitude"
              placeholder="Longitude"
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success btn-block">
              Get Weather
            </button>
          </div>

          <ErrorMessage name="latitude">
            {(msg) => <span>{msg}</span>}
          </ErrorMessage>
          <ErrorMessage name="longitude">
            {(msg) => <span>{msg}</span>}
          </ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
};

export default WeatherForm;
