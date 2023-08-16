import { Container, Image } from "react-bootstrap"

function App() {
  return (<Container>
    <Image src="/images/logo.jpg" fluid />
    <h1>Vielen Dank für Ihren Besuch</h1>
    <p>
      Sie erreichen uns Telefonisch oder per Email unter:
    </p>
    <p>
      Tel.: 0561 / 1077-77
      Fax.: 0561 / 1077-70
      Mail: info [AT] citron-schmitz [PUNKT] de
    </p>
    <h2>Impressum</h2>
    <p>
      Citron & Schmitz <br />
      Immobilien Service GmbH <br /><br />
      Goethestraße 32 <br />
      34119 Kassel <br />
      Tel.: 0561 / 1077-77 <br />
      Fax.: 0561 / 1077-70 <br /> <br />
      Eingetragen im Handelsregister das Amtsgericht Kassel, HRB folgt <br />
      Gesellschaftsform: GmbH <br />
      Geschäftsführender Gesellschafter: Peter Schmitz <br /><br />
      Berufsaufsichtsbehörde: Stadt Kassel, Ordnungsamt. 34112 Kassel <br />
      Genehmigung nach § 34c GewO durch die Stadt Kassel, Ordnungsamt. <br />
      USt-IdNr.: DE 224270508
    </p>
    <p>
      <small>&copy; 2023 - Citron & Schmitz Immobilien Service GmbH</small><br />
      <small>Website erstellt durch <a href="https://computer-extra.de" target="_blank">Computer Extra, Ernst & Jacob KG</a></small></p>
  </Container>)
}

export default App
