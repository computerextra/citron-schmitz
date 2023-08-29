import { Button, Container, Image, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { useState } from "react"
import DatenschutzModal from "./DatenschutzModal";

function App() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid="sm" className="mx-auto text-center">
      <Image src="/images/logo.jpg" fluid alt="Citron & Schmitz Logo" />
      <h1 className="mt-3 mb-3">Vielen Dank für Ihren Besuch</h1>
      <p>Sie erreichen uns Telefonisch oder per Email unter:</p>
      <p>
        Tel.: 0561 / 1077-77 <br /> Fax.: 0561 / 1077-70 <br /> Mail: info [AT] citron-schmitz
        [PUNKT] de
      </p>
      <h2>Impressum</h2>
      <p>
        Citron & Schmitz <br />
        Immobilien Service GmbH <br />
        <br />
        Goethestraße 32 <br />
        34119 Kassel <br />
        Tel.: 0561 / 1077-77 <br />
        Fax.: 0561 / 1077-70 <br /> <br />
        Eingetragen im Handelsregister das Amtsgericht Kassel, HRB folgt <br />
        Gesellschaftsform: GmbH <br />
        Geschäftsführender Gesellschafter: Peter Schmitz <br />
        <br />
        Berufsaufsichtsbehörde: Stadt Kassel, Ordnungsamt. 34112 Kassel <br />
        Genehmigung nach § 34c GewO durch die Stadt Kassel, Ordnungsamt. <br />
        USt-IdNr.: DE 224270508
      </p>
      <h3>Datenschutz</h3>
      <p>
        <span className="text-primary" style={{ cursor: "pointer" }} onClick={handleShow}><u>Datenschutzerklärung</u></span>
      </p>
      <p>
        <small className="fw-semibold">&copy; 2023 - Citron & Schmitz Immobilien Service GmbH</small>
        <br />
        <small className="text-secondary">
          Website erstellt durch{" "}
          <a href="https://computer-extra.de" target="_blank">
            Computer Extra, Ernst & Jacob KG
          </a>
        </small>
      </p>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <ModalHeader closeButton>
          <ModalTitle>Datenschutzerklärung</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <DatenschutzModal />
        </ModalBody>

        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>Schließen</Button>
        </ModalFooter>
      </Modal>

    </Container>
  );
}

export default App;
