import Bank from "./paymendMethod/Bank";
import MasterCard from "./paymendMethod/MasterCard";
import QrCode from "./paymendMethod/QrCode";

/*
before error boundary
- show blank page, bad UI/UX
- user can't performs anything in apps.
- developer difficulty to find bug

after error boundary
- show UI/UX friendly
- user an performs other action in apps.
- show information error -> developer fix fast
*/

function ReactErrorBoundaryComponent() {
  
  return (
    <div>
      <h1>ReactErrorBoundaryComponent</h1>
      <h4>Paymend method</h4>
      
      <Bank />
      <br />
      <hr />
      <br />

      <MasterCard />
      <br />
      <hr />
      <br />
      <QrCode />
    </div>
  )
}

export default ReactErrorBoundaryComponent

/* payment
method: bank, qr code, mobile card

*/