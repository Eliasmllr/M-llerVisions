"use client"
import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import { Button } from 'react-bootstrap';

const metadata: Metadata = {
  title: "Datenschutz - Grid System Unique Portfolio NextJs Template",
  description: "NextJs Template",
};

const AboutUs = () => {
  // const handleScroll = () => {
  //   document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button
          // onClick={handleScroll}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#6a4acd",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          Go Down
        </Button>
      </div>
        <div className='datenschutz-content'>
          <>
            <h1>Datenschutz­erklärung</h1>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>{" "}
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
              Datenschutzerklärung.
            </p>
            <h3>Datenerfassung auf dieser Website</h3>{" "}
            <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>{" "}
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen
              Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>{" "}
            <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
              Kontaktformular eingeben.
            </p>{" "}
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
              Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
              betreten.
            </p>{" "}
            <h4>Wofür nutzen wir Ihre Daten?</h4>{" "}
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
              Website zu gewährleisten. Andere Daten können zur Analyse Ihres
              Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
              geschlossen oder angebahnt werden können, werden die übermittelten Daten
              auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
              verarbeitet.
            </p>{" "}
            <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>{" "}
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
              Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht
              Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>{" "}
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
              jederzeit an uns wenden.
            </p>
            <h3>Analyse-Tools und Tools von Dritt­anbietern</h3>{" "}
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet
              werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
            </p>{" "}
            <p>
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
              folgenden Datenschutzerklärung.
            </p>
            <h2>2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3>Strato</h3>{" "}
            <p>
              Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin
              (nachfolgend „Strato“). Wenn Sie unsere Website besuchen, erfasst Strato
              verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>{" "}
            <p>
              Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:{" "}
              <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.strato.de/datenschutz/
              </a>
              .
            </p>{" "}
            <p>
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen
              Darstellung unserer Website. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung
              die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
              des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
              Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
            <h3>Datenschutz</h3>{" "}
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
              ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>{" "}
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
              erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
              identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
              welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
              und zu welchem Zweck das geschieht.
            </p>{" "}
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei
              der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>{" "}
            <p>
              Elias Möller
              <br />
              Birkenring 4<br />
              31319 Sehnde
            </p>
            <p>
              Telefon: +4917623999625
              <br />
              E-Mail: info@moellervisions.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die
              allein oder gemeinsam mit anderen über die Zwecke und Mittel der
              Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen
              o. Ä.) entscheidet.
            </p>
            <h3>Speicherdauer</h3>{" "}
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der
              Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
              Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
              widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
              (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
            <h3>
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
              Website
            </h3>{" "}
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw.
              Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9
              Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
              in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
              Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
              Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting)
              eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage
              von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
              Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1
              lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
              Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage
              von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
              Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
              erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
              in den folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>
            <h3>EmpfÃ¤nger von personenbezogenen Daten</h3>{" "}
            <p>
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen
              Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von
              personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
              personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im
              Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
              verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn
              wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
              Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe
              erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene
              Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über
              Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird
              ein Vertrag über gemeinsame Verarbeitung geschlossen.
            </p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
              jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <h3>
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
              Direktwerbung (Art. 21 DSGVO)
            </h3>{" "}
            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
              DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
              IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
              PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
              DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
              DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN
              DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
              SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
              RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
              GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH
              NACH ART. 21 ABS. 1 DSGVO).
            </p>{" "}
            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
              BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
              VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
              WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER
              DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
              PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
              DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>{" "}
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des
              Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
              anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <h3>Recht auf Daten­übertrag­barkeit</h3>{" "}
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen
              Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              Sofern Sie die direkte Übertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
              ist.
            </p>
            <h3>Auskunft, Berichtigung und Löschung</h3>{" "}
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das
              Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
              Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
              ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
              an uns wenden.
            </p>
            <h3>Recht auf Einschränkung der Verarbeitung</h3>{" "}
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an
              uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:
            </p>{" "}
            <ul>
              {" "}
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
                Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.
                Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                geschah/geschieht, können Sie statt der Löschung die Einschränkung der
                Datenverarbeitung verlangen.
              </li>{" "}
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch
                zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
                benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss
                eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
                Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
                Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen.
              </li>{" "}
            </ul>{" "}
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben,
              dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer
              Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses
              der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <h3>SSL- bzw. TLS-Verschlüsselung</h3>{" "}
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie
              an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>{" "}
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die
              Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
            <h3>Widerspruch gegen Werbe-E-Mails</h3>{" "}
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung
              und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
              Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>{" "}
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>{" "}
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
              oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
              übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
              lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>{" "}
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis
              Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
              Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>{" "}
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
              oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
              übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
              lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>{" "}
            <p>
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche
              Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
              unberührt.
            </p>
            <h3>Kommunikation via WhatsApp</h3>{" "}
            <p>
              Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir
              unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die
              WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin
              2, Irland.
            </p>{" "}
            <p>
              Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung
              (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff
              auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch
              Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen
              (z.&nbsp;B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner darauf
              hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten seiner
              Nutzer mit seiner in den USA ansässigen Konzernmutter Meta teilt. Weitere
              Details zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von
              WhatsApp unter:{" "}
              <a
                href="https://www.whatsapp.com/legal/#privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.whatsapp.com/legal/#privacy-policy
              </a>
              .
            </p>{" "}
            <p>
              Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten
              Interesses an einer möglichst schnellen und effektiven Kommunikation mit
              Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6
              Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt
              wurde, erfolgt die Datenverarbeitung ausschließlich auf Grundlage der
              Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.
            </p>{" "}
            <p>
              Die zwischen Ihnen und uns auf WhatsApp ausgetauschten Kommunikationsinhalte
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
              zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
              gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
              unberührt.
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
              Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
              Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
              vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/7735"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dataprivacyframework.gov/participant/7735
              </a>
              .
            </p>
            <h2>5. Soziale Medien</h2>
            <h3>Instagram</h3>{" "}
            <p>
              Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese
              Funktionen werden angeboten durch die Meta Platforms Ireland Limited,
              Merrion Road, Dublin 4, D04 X2K5, Irland.
            </p>{" "}
            <p>
              Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung
              zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram
              erhält dadurch Informationen über den Besuch dieser Website durch Sie.
            </p>{" "}
            <p>
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch
              Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem
              Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website
              Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter
              der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren
              Nutzung durch Instagram erhalten.
            </p>{" "}
            <p>
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach
              Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist
              jederzeit widerrufbar.
            </p>{" "}
            <p>
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf
              unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet
              werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese
              Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame
              Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung
              der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der
              Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist
              nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
              Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung
              festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
              . Laut dieser Vereinbarung sind wir für die Erteilung der
              Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und
              für die datenschutzrechtlich sichere Implementierung des Tools auf unserer
              Website verantwortlich. Für die Datensicherheit der Facebook bzw.
              Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte
              (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
              verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie
              die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese
              an Facebook weiterzuleiten.
            </p>{" "}
            <p>
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
              EU-Kommission gestützt. Details finden Sie hier:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ,{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://privacycenter.instagram.com/policy/
              </a>{" "}
              und{" "}
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://de-de.facebook.com/help/566994660333381
              </a>
              .
            </p>{" "}
            <p>
              Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
              Instagram:{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://privacycenter.instagram.com/policy/
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
              Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
              Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
              vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/4452"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dataprivacyframework.gov/participant/4452
              </a>
              .
            </p>
            <h2>6. Analyse-Tools und Werbung</h2>
            <h3>Google Tag Manager</h3>{" "}
            <p>
              Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>{" "}
            <p>
              Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder
              Statistik-Tools und andere Technologien auf unserer Website einbinden
              können. Der Google Tag Manager selbst erstellt keine Nutzerprofile,
              speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er
              dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen
              Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an
              das Mutterunternehmen von Google in die Vereinigten Staaten übertragen
              werden kann.
            </p>{" "}
            <p>
              Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer
              schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools
              auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
              erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
              a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
              (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
              Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
              Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
              vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>
            <h3>Google Analytics</h3>{" "}
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
              Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow
              Street, Dublin 4, Irland.
            </p>{" "}
            <p>
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der
              Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber
              verschiedene Nutzungsdaten, wie z.&nbsp;B. Seitenaufrufe, Verweildauer,
              verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden dem
              jeweiligen EndgerÃ¤t des Users zugeordnet. Eine Zuordnung zu einer User-ID
              erfolgt nicht.
            </p>{" "}
            <p>
              Des Weiteren können wir mit Google Analytics u.&nbsp;a. Ihre Maus- und
              Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google Analytics
              verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen
              und setzt Machine-Learning-Technologien bei der Datenanalyse ein.
            </p>
            <p>
              Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers
              zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z.&nbsp;B. Cookies
              oder Device-Fingerprinting). Die von Google erfassten Informationen über die
              Benutzung dieser Website werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert.
            </p>{" "}
            <p>
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach
              Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist
              jederzeit widerrufbar.
            </p>{" "}
            <p>
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
              EU-Kommission gestützt. Details finden Sie hier:{" "}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
              .
            </p>{" "}
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
              Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
              Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
              vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>
            <h4>IP Anonymisierung</h4>{" "}
            <p>
              Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird Ihre
              IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union
              oder in anderen Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in
              Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den
              USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website
              wird Google diese Informationen benutzen, um Ihre Nutzung der Website
              auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um
              weitere mit der Websitenutzung und der Internetnutzung verbundene
              Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen
              von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
              mit anderen Daten von Google zusammengeführt.
            </p>
            <h4>Browser Plugin</h4>{" "}
            <p>
              Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
              verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
              herunterladen und installieren:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              .
            </p>{" "}
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden
              Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
              .
            </p>
            <h3>Google Ads</h3>{" "}
            <p>
              Der Websitebetreiber verwendet Google Ads. Google Ads ist ein
              Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>{" "}
            <p>
              Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder
              auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei
              Google eingibt (Keyword-Targeting). Ferner können zielgerichtete
              Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z.&nbsp;B.
              Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting).
              Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir
              beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer
              Werbeanzeigen geführt haben und wie viele Anzeigen zu entsprechenden Klicks
              geführt haben.
            </p>{" "}
            <p>
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach
              Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist
              jederzeit widerrufbar.
            </p>{" "}
            <p>
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
              EU-Kommission gestützt. Details finden Sie hier:{" "}
              <a
                href="https://policies.google.com/privacy/frameworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy/frameworks
              </a>{" "}
              und{" "}
              <a
                href="https://business.safety.google/controllerterms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://business.safety.google/controllerterms/
              </a>
              .
            </p>
            <p>
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
              Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
              Europäischen Union und den USA, der die Einhaltung europäischer
              Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
              Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
              vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>
            <h2 id="target-section">7. Plugins und Tools</h2>
            <h3>Google Fonts (lokales Hosting)</h3>{" "}
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte
              Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind
              lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht
              statt.
            </p>{" "}
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
          </>

        </div>
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
