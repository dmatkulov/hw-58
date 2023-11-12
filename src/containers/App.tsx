import FirstModal from '../components/FirstModal/FirstModal';
import SecondModal from '../components/SecondModal/SecondModal';
import AlertStatic from '../components/AlertStatic/AlertStatic';
import AlertDismissible from '../components/AlertDismissible/AlertDismissible';
import AlertClickDismissible from '../components/AlertClickDismissable/AlertClickDismissible';

const App = () => {
  
  return (
    <div className="container mx-auto">
      <div className="col-6 mt-5 mb-5 d-flex justify-content-between">
        <FirstModal/>
        <SecondModal/>
      </div>
      <div className="row">
        <div className="col-6">
          <AlertStatic/>
          <AlertDismissible/>
          <AlertClickDismissible/>
        </div>
      </div>
    </div>
  );
};

export default App;
