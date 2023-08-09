import carimg from "./image/carbg.jpeg"
import './MainPage.css';

function MainPage() {
  return (
    <>
    <img className="carimg" src={carimg}></img>
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">PrimeAuto</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>

      </div>
    </div>
    </>
  );
}

export default MainPage;
