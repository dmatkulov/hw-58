import FirstModal from '../components/FirstModal/FirstModal';
import SecondModal from '../components/SecondModal/SecondModal';
import Alert from '../UI/Alert/Alert';

const App = () => {
  // const [showAlert, setShowAlert] = useState(true);
  // const dismissAlert = () => {
  //   console.log('dismiss');
  // };
  
  return (
    <div className="row container mt-5 mx-auto">
      <div className="col-6">
        <FirstModal/>
      </div>
      <div className="col-6">
        <SecondModal/>
      </div>
      <div className="row">
        <div className="col-6">
          <Alert
            type="success"
            // show={showAlert}
            // onDismiss={dismissAlert}
          >
            This is success type alert
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default App;
