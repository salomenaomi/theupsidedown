<script>
  import ProgressTracker from "./lib/components/ProgressTracker.svelte";
  import Introductie from "./lib/components/Introductie.svelte";
  import Introductie2 from "./lib/components/Introductie2.svelte";
  import WensenUren from "./lib/components/WensenUren.svelte";
  import Startpagina from "./lib/components/Startpagina.svelte";
  import WensenAccorderen from "./lib/components/WensenAccorderen.svelte";
  import WensenPlannen from "./lib/components/WensenPlannen.svelte";
  import WensenFactureren from "./lib/components/WensenFactureren.svelte";
  import Match from "./lib/components/Match.svelte";
  import Kosten from "./lib/components/Kosten.svelte";

  // opslaan paginanummer
  export let huidigePagina = 0;

  // opslaan verschillende soorten tekst om op pagina te printen
  let paginaInhoud = {
    startpagina: [
      {
        id: 0,
        tekst1: "Welkom bij de ClockWise Keuzehulp!",
        tekst2:
          "In de ClockWise Keuzehulp komt u er snel achter of ClockWise de urenregistratie software voor jouw organisatie is. Door middel van deze quiz maakt u snel kennis met ClockWise en komt u erachter wat de mogelijkheden zijn van de software.",
        tekst3:
          "In ClockWise is een software waarbij veel mogelijk is. Als u nog iets in deze quiz mist als functionaliteit, maar u zich afvraagt of dit wel mogelijk is binnen het systeem; elke werkdag tussen 9:00 en 17:00 zijn we bereikbaar voor al uw vragen. Daarnaast kunt u ons ook bereiken via e-mail. Laten we snel beginnen!",
        buttontekst: "Begin met de kennismaking",
      },
    ],
    introductie: [
      {
        id: 1,
        tekst1: "Laten we kennis maken!",
        vraag: "Wie bent u en bij welke organisatie bent u werkzaam?",
        button: "Ga naar de volgende vraag",
        label1: "Naam",
        label2: "Naam organisatie",
      },
    ],
    introductie2: [
      {
        id: 2,
        vraag: "Registreren jullie al uren?",
        antwoorden: [
          {
            id: "ja",
            text: "Ja",
          },
          {
            id: "nee",
            text: "Nee",
          },
        ],
        button1: "Terug",
        button2: "Start met de keuzehulp",
      },
    ],
    wensenUren: [
      {
        id: 3,
        vraag:
          "In welke stellingen kunt u zich het best vinden met betrekking tot urenregistratie?",
        antwoorden: [
          {
            id: 1,
            text: "Ik wil graag meer inzicht krijgen in de werkzaamheden die mijn medewerkers registreren.",
          },
          {
            id: 2,
            text: "Ik zou het fijn vinden om grip te hebben op de contractuele afspraken die ik met mijn medewerkers heb.",
          },
        ],
        button1: "Terug",
        button2: "Ga verder met Accorderen",
      },
    ],
    wensenAccorderen: [
      {
        id: 4,
        vraag:
          "In welke stellingen kunt u zich het best vinden met betrekking tot het accordeerproces?",
        antwoorden: [
          {
            id: 1,
            text: "Ik zou graag willen dat de uren worden goedgekeurd door één of meerdere interne of externe managers.",
          },
          {
            id: 2,
            text: "Ik zou graag inzage hebben in de staat van de ingeleverde uren binnen het accordeerproces.",
          },
          {
            id: 3,
            text: "Ik zou graag mijn medewerkers willen notificeren over hun ingeleverde of te accorderen uren.",
          },
        ],
        button1: "Terug",
        button2: "Ga verder met Plannen & begroten",
      },
    ],
    wensenPlannen: [
      {
        id: 5,
        vraag:
          "In welke stellingen kunt u zich het best vinden met betrekking tot plannen & begroten?",
        antwoorden: [
          {
            id: 1,
            text: "Binnen onze organisatie is het belangrijk dat we ons gezamenlijk aan de begroting houden.",
          },
          {
            id: 2,
            text: "Ik wil graag in zien wat de voortgang is van mijn project.",
          },
          {
            id: 3,
            text: "Wij hebben er baat bij als onze data visueel in te zien is. Ik wil graag bedrijfstrends inzichtelijk maken.",
          },
          {
            id: 4,
            text: "Wij werken met projecten waarbij startdata en deadlines (sterk) gehandhaafd moeten worden.",
          },
          {
            id: 5,
            text: "Ik wil graag controle houden over het verloop mijn projecten.",
          },
          {
            id: 6,
            text: "Ik wil graag het verlof van mijn medewerkers registreren en inzichtelijk maken.",
          },
          {
            id: 7,
            text: "Ik heb baat bij een optie voor een agenda die ik of mijn medewerker zelf kan beheren.",
          },
        ],
        button1: "Terug",
        button2: "Ga verder met Factureren",
      },
    ],
    wensenFactureren: [
      {
        id: 6,
        vraag:
          "In welke stellingen kunt u zich het best vinden met betrekking tot het facturatieproces?",
        antwoorden: [
          {
            id: 1,
            text: "Ik wil graag uren laten registreren en deze factureren vanuit 1 systeem.",
          },
          {
            id: 2,
            text: "Het lijkt me handig om overige kosten ook toe te kunnen voegen aan een factuur.",
          },
          {
            id: 3,
            text: "Naast het factureren van uren wil ik ook (periodieke) vaste bedragen kunnen factureren.",
          },
          {
            id: 4,
            text: "Ons bedrijf factureert uren altijd direct aan het eind van de maand.",
          },
          {
            id: 5,
            text: "Wij maken gebruik van een van de volgende boekhoudpakketten: AFAS, Twinfield, Snelstart, Yuki of Exact Online.",
          },
          {
            id: 6,
            text: "Ik wil graag inzage in de financiële staat of voortgang van mijn projecten.",
          },
          {
            id: 7,
            text: "Ik werk met ZZP’ers of ik ben een detacheerder.",
          },
        ],
        button1: "Terug",
        button2: "Ga naar de match",
      },
    ],
    match: [
      {
        id: 7,
        tekstonderdeel1: "Match ClockWise & ",
        tekstonderdeel2: "Urenregistratie",
        tekstonderdeel3: "Accorderen",
        tekstonderdeel4: "Plannen & begroten",
        tekstonderdeel5: "Factureren",
        matchonderdelen: [
          {
            id: 1,
            title: "Urenregistratie",
            onderdelenStelling1: [
              {
                id: 1,
                stelling:
                  "Ik wil graag meer inzicht krijgen in de werkzaamheden die mijn medewerkers registreren.",
                title:
                  "(Verplicht) een toelichting over geschreven uren verschaffen.",
                text: "...",
              },
              {
                id: 2,
                title:
                  "Kilometers en onkosten declareren.",
                text: "...",
                voordeel: "Een extra voordeel van urenregistratie: geen verloren urenbriefjes of extra tijd kwijt zijn aan het verwerken van verschillende Excel bestanden.",
              },
            ],
            onderdelenStelling2: [
              {
                id: 3,
                stelling:
                  "Ik zou het fijn vinden om grip te hebben op de contractuele afspraken die ik met mijn medewerkers heb.",
                title:
                  "Contractuele afspraken per medewerker registreren en instellen dat ze hier niet overheen kunnen schrijven of een waarschuwing krijgen als dit gebeurt.",
                text: "...",
              },
              {
                id: 4,
                title: "Registreren overwerk.",
                text: "...",
              },
            ],
          },
          {
            id: 2,
            title: "Accorderen",
            onderdelenStelling1: [
              {
                id: 1,
                stelling:
                  "Ik zou graag willen dat de uren worden goedgekeurd door één of meerdere interne of externe managers.",
                title:
                  "Uren kunnen worden goed gekeurd door afdelingsmanagers en/of projectmanagers.",
                text: "...",
              },
              {
                id: 2,
                title:
                  "Klanten kunnen ook uren goedkeuren via een externe link/inloggegevens.",
                text: "...",
                voordeel: "Een extra voordeel van uren accorderen is dat dit menselijke fouten vermindert.",
              },
            ],
            onderdelenStelling2: [
              {
                id: 4,
                stelling:
                  "Ik zou graag inzage hebben in de staat van de ingeleverde uren binnen het accordeerproces.",
                title: "Accordeergeschiedenis.",
                text: "...",
              },
              {
                id: 5,
                title:
                  "Rapportages: inzien welke uren zijn ingeleverd, maar ook welke uren zijn goed- of afgekeurd.",
                text: "...",
                voordeel: "Dit is extra handig als er accorderingen door meerdere personen gegeven worden.",
              },
            ],
            onderdelenStelling3: [
              {
                id: 6,
                stelling:
                  "Ik zou graag mijn medewerkers willen notificeren over hun ingeleverde of te accorderen uren.",
                title:
                  "Een notificatie mail bij goed- of afgekeurde uren.",
                text: "...",
              },
              {
                id: 7,
                title:
                  "Bij niet ingeleverde uren kunnen medewerkers genotificeerd worden.",
                text: "...",
              },
              {
                id: 8,
                title:
                  "Bij afgekeurde uren kan je een opmerking plaatsen door een manager.",
                text: "...",
                voordeel: "Een extra voordeel van de functionaliteit notificeren is dat hierdoor het accordeerproces versneld wordt.",
              },
            ],
          },
          {
            id: 3,
            title: "Plannen & begroten",
            onderdelenStelling1: [
              {
                id: 1,
                stelling:
                  "Binnen onze organisatie is het belangrijk dat we ons gezamenlijk aan de begroting houden.",
                title:
                  "Medewerkers kunnen niet het begrote aantal uren kunnen overschrijden of een waarschuwing krijgen als dit gebeurt.",
                text: "...",
              },
              {
                id: 2,
                title:
                  "Medewerkers kunnen inzicht krijgen in hun eigen (begrote) uren.",
                text: "...",
              },
            ],
            onderdelenStelling2: [
              {
                id: 3,
                stelling:
                  "Ik wil graag in zien wat de voortgang is van mijn project.",
                title: "Rapportages en dossiers.",
                text: "...",
              },
            ],
            onderdelenStelling3: [
              {
                id: 4,
                stelling:
                  "Wij hebben er baat bij als onze data visueel in te zien is. Ik wil graag bedrijfstrends inzichtelijk maken.",
                title: "Projectrapportages (visueel) kunnen exporteren.",
                text: "...",
              },
              {
                id: 5,
                title: "Mogelijkheid om gebruik te maken van PowerBI of Qlik.",
                text: "...",
              },
            ],
            onderdelenStelling4: [
              {
                id: 6,
                stelling:
                  "Wij krijgen tijdens onze werkzaamheden te maken met projecten waarbij startdata en deadlines (sterk) gehandhaafd moeten worden.",
                title: "Periode instellen per project",
                text: "Het is mogelijk om per project een periode in te stellen waarin medewerkers hun uren kunnen registreren. Buiten deze periode kunnen er geen uren geregistreerd worden op dat project.",
              },
            ],
            onderdelenStelling5: [
              {
                id: 7,
                stelling:
                  "Ik wil graag controle houden over het verloop mijn projecten.",
                title:
                  "Begrote uren instellen + start data en deadlines instellen.",
                text: "...",
              },
            ],
            onderdelenStelling6: [
              {
                id: 8,
                stelling:
                  "Ik wil graag het verlof van mijn medewerkers registreren en inzichtelijk maken.",
                title: "Verlof schrijven.",
                text: "...",
              },
              {
                id: 9,
                title: "Verlof aanvragen.",
                text: "...",
                voordeel: "Een extra voordeel van het gebruik van de vakantiekaart is dat je hierdoor een overzicht van de personeelsbezetting hebt.",
              },
            ],
            onderdelenStelling7: [
              {
                id: 11,
                stelling:
                  "Ik heb baat bij een optie voor een agenda die ik of mijn medewerker zelf kan beheren.",
                title:
                  "Uren kunnen gekoppeld worden aan een project en uren en omschrijving kunnen ook overgenomen worden in het urenscherm.",
                text: "...",
              },
              {
                id: 12,
                title:
                  "Agenda vanuit ClockWise kan geëxporteerd worden naar Outlook/Google/Android/Apple agenda.",
                text: "...",
              },
            ],
          },
          {
            id: 4,
            title: "Factureren",
            onderdelenStelling1: [
              {
                id: 1,
                stelling:
                  "Ik wil graag uren laten registreren en deze factureren vanuit 1 systeem.",
                title:
                  "De optie om alle geschreven en goedgekeurde uren te factureren aan een klant (vaste bedragen).",
                text: "...",
                voordeel: "Een voordeel van het alleen factureren van goedgekeurde uren heeft u meer zekerheid, omdat deze uren al gecontroleerd zijn. Hierdoor worden er ook minder creditnota's aangemaakt.",
              },
              {
                id: 2,
                title: "Herinneringen en creditnota’s maken en/of verzenden.",
                text: "...",
              },
              {
                id: 3,
                title: "Voordeel: mogelijkheid voor een eigen factuur lay-out.",
                text: "...",
              },
            ],
            onderdelenStelling2: [
              {
                id: 5,
                stelling:
                  "Het lijkt me handig om overige kosten ook toe te kunnen voegen aan een factuur.",
                title: "Extra kosten, zoals administratiekosten, te factureren vanuit ClockWise.",
                text: "...",
              },
              {
                id: 6,
                title: "Reis- en onkosten door factureren.",
                text: "...",
              },
            ],
            onderdelenStelling3: [
              {
                id: 7,
                stelling:
                  "Naast het factureren van uren wil ik ook (periodieke) vaste bedragen kunnen factureren.",
                title: "Vaste bedragen eenmalig of periodiek factureren.",
                text: "...",
              },
            ],
            onderdelenStelling4: [
              {
                id: 8,
                stelling:
                  "Ons bedrijf factureert uren altijd direct aan het eind van de maand.",
                title: "Naast inleveren en goedkeuren per week kunnen de uren ook per maand worden ingeleverd.",
                text: "Een voordeel hiervan is dat bij ClockWise de maand in gesplitste weken ingeleverd kan worden. Wel moet dit even aangevraagd worden bij ons, dan wordt dat voor u aangezet in uw eigen omgeving.",
              },
            ],
            onderdelenStelling5: [
              {
                id: 7,
                stelling:
                  "In onze financiële werkzaamheden maken wij gebruik van een van de volgende boekhoudpakketten: AFAS, Twinfield, Snelstart, Yuki of Exact Online.",
                title:
                  "ClockWise heeft een administratieconnector. Uren kunnen worden overgezet naar een van de volgende boekhoudpakketten: AFAS, Twinfield, Snelstart, Yuki of Exact Online.",
                text: "...",
              },
            ],
            onderdelenStelling6: [
              {
                id: 8,
                stelling:
                  "Ik wil graag inzage in de financiële staat of voortgang van mijn projecten.",
                title: "Financiële rapportages.",
                text: "...",
              },
            ],
            onderdelenStelling7: [
              {
                id: 9,
                stelling:
                  "Ik werk met ZZP’ers of ik ben een detacheerder.",
                title:
                  "Reverse Billing",
                text: "...",
              },
              {
                id: 10,
                title:
                  "Digitaal klantakkoord",
                text: "...",
              },
            ],
          },
        ],
        buttons: [
          {
            id: 1,
            text: "Terug",
          },
          {
            id: 2,
            text: "Ga naar de kostenberekening",
          },
        ],
      },
    ],
    tekstonderdelen: [
      {
        id: 0,
        tekst1: "Welkom bij de ClockWise Keuzehulp!",
        tekst2:
          "In de ClockWise Keuzehulp komt u er snel achter of ClockWise de urenregistratie software voor jouw organisatie is. Door middel van deze quiz maakt u snel kennis met ClockWise en komt u erachter wat de mogelijkheden zijn van de software.",
        tekst3:
          "In ClockWise is een software waarbij veel mogelijk is. Als u nog iets in deze quiz mist als functionaliteit, maar u zich afvraagt of dit wel mogelijk is binnen het systeem; elke werkdag tussen 9:00 en 17:00 zijn we bereikbaar voor al uw vragen. Daarnaast kunt u ons ook bereiken via e-mail. Laten we snel beginnen!",
      },
      {
        id: 1,
        tekst1: "Laten we kennis maken!",
      },
      {
        id: 7,
        tekst1: "Match ClockWise en ",
      },
      {
        id: 8,
        tekst1: "Hoeveel kost ClockWise voor uw onderneming?",
      },
    ],
    vragen: [
      {
        id: 1,
        vraag1: "Wie bent u en bij welke organisatie bent u werkzaam?",
        next_button_text: "Next",
      },
      {
        id: 2,
        vraag1: "Registreren jullie al uren?",
      },
      {
        id: 3,
        vraag1:
          "In welke stellingen kunt u zich het best vinden met betrekking tot urenregistratie?",
      },
      {
        id: 4,
        vraag1:
          "In welke stellingen kunt u zich het best vinden met betrekking tot het accordeerproces?",
      },
      {
        id: 5,
        vraag1:
          "In welke stellingen kunt u zich het best vinden met betrekking tot plannen & begroten?",
      },
      {
        id: 6,
        vraag1:
          "In welke stellingen kunt u zich het best vinden met betrekking tot het facturatieproces?",
      },
    ],
    antwoorden: [
      {
        id: 2,
        antwoorden: [
          {
            id: "ja",
            text: "Ja",
          },
          {
            id: "nee",
            text: "Nee",
          },
        ],
        antwoord1: "Ja",
        antwoord2: "Nee",
      },
      {
        id: 3,
        antwoord1:
          "Ik wil graag meer inzicht krijgen in de werkzaamheden die mijn medewerkers registreren.",
        antwoord2:
          "Ik zou het fijn vinden om grip te hebben op de contractuele afspraken die ik met mijn medewerkers heb.",
      },
      {
        id: 4,
        antwoord1:
          "Ik zou graag willen dat de uren worden goedgekeurd door één of meerdere interne of externe managers.",
        antwoord2:
          "Ik zou graag inzage hebben in de staat van de ingeleverde uren binnen het accordeerproces.",
        antwoord3:
          "Ik zou graag mijn medewerkers willen notificeren over hun ingeleverde of te accorderen uren.",
      },
      {
        id: 5,
        antwoord1:
          "Binnen onze organisatie is het belangrijk dat we ons gezamenlijk aan de begroting houden.",
        antwoord2: "Ik wil graag in zien wat de voortgang is van mijn project.",
        antwoord3:
          "Wij hebben er baat bij als onze data visueel in te zien is. Ik wil graag bedrijfstrends inzichtelijk maken.",
        antwoord4:
          "Wij werken met projecten waarbij startdata en deadlines (sterk) gehandhaafd moeten worden.",
        antwoord5:
          "Ik wil graag controle houden over het verloop mijn projecten.",
        antwoord6:
          "Ik wil graag het verlof van mijn medewerkers registreren en inzichtelijk maken.",
        antwoord7:
          "Ik heb baat bij een optie voor een agenda die ik of mijn medewerker zelf kan beheren.",
      },
      {
        id: 6,
        antwoord1:
          "Ik wil graag uren laten registreren en deze factureren vanuit 1 systeem.",
        antwoord2:
          "Het lijkt me handig om overige kosten ook toe te kunnen voegen aan een factuur.",
        antwoord3:
          "Naast het factureren van uren wil ik ook (periodieke) vaste bedragen kunnen factureren.",
        antwoord4:
          "Ons bedrijf factureert uren altijd direct aan het eind van de maand.",
        antwoord5:
          "Wij maken gebruik van een van de volgende boekhoudpakketten: AFAS, Twinfield, Snelstart, Yuki of Exact Online.",
        antwoord6:
          "Ik wil graag inzage in de financiële staat of voortgang van mijn projecten.",
        antwoord7: "Ik werk met ZZP’ers of ik ben een detacheerder.",
      },
    ],
    buttons: [
      {
        id: 0,
        button: "Begin met de kennismaking",
      },
      {
        id: 1,
        button: "Ga naar de volgende vraag",
      },
      {
        id: 2,
        button1: "Terug",
        button2: "Start met de Keuzehulp",
      },
      {
        id: 3,
        button1: "Terug",
        button2: "Ga naar Accorderen",
      },
      {
        id: 4,
        button1: "Terug",
        button2: "Ga naar Plannen & begroten",
      },
      {
        id: 5,
        button1: "Terug",
        button2: "Ga naar Factureren",
      },
      {
        id: 6,
        button1: "Terug",
        button2: "Ga naar de match",
      },
      {
        id: 7,
        button1: "Terug",
        button2: "Ga naar de kostenberekening",
      },
      {
        id: 8,
        button1: "Terug",
        button2: "Vraag een proefperiode aan",
      },
    ],
    labels: [
      {
        id: 1,
        label1: "Naam",
        label2: "Naam organisatie",
      },
    ],
  };

  // functie om paginanummering te veranderen
  export let veranderPagina = (e) => {
    e.preventDefault();
    huidigePagina++;
  };

  export let vorigePagina = (e) => {
    e.preventDefault();
    huidigePagina--;
  };

  // id ophalen uit array die gelijk staat aan de huidigePagina nummering
  $: paginaInhoudInformatie = {
    tekstonderdelen: paginaInhoud.tekstonderdelen.find(
      (obj) => obj.id === huidigePagina
    ),
    vragen: paginaInhoud.vragen.find((obj) => obj.id === huidigePagina),
    antwoorden: paginaInhoud.antwoorden.find((obj) => obj.id === huidigePagina),
    buttons: paginaInhoud.buttons.find((obj) => obj.id === huidigePagina),
    labels: paginaInhoud.labels.find((obj) => obj.id === huidigePagina),

    startpagina: paginaInhoud.startpagina.find(
      (obj) => obj.id === huidigePagina
    ),
    introductie: paginaInhoud.introductie.find(
      (obj) => obj.id === huidigePagina
    ),
    introductie2: paginaInhoud.introductie2.find(
      (obj) => obj.id === huidigePagina
    ),
    wensenUren: paginaInhoud.wensenUren.find((obj) => obj.id === huidigePagina),
    wensenAccorderen: paginaInhoud.wensenAccorderen.find(
      (obj) => obj.id === huidigePagina
    ),
    wensenPlannen: paginaInhoud.wensenPlannen.find(
      (obj) => obj.id === huidigePagina
    ),
    wensenFactureren: paginaInhoud.wensenFactureren.find(
      (obj) => obj.id === huidigePagina
    ),
    match: paginaInhoud.match.find((obj) => obj.id === huidigePagina),
  };

  // verschillende soorten tekst variabelen maken om te gebruiken in de componenten
  $: tekstonderdeel = paginaInhoudInformatie.tekstonderdelen;
  $: vraag = paginaInhoudInformatie.vragen;
  $: antwoord = paginaInhoudInformatie.antwoorden;
  $: buttontekst = paginaInhoudInformatie.buttons;
  $: labels = paginaInhoudInformatie.labels;

  $: startpaginaInhoud = paginaInhoudInformatie.startpagina;
  $: introductieInhoud = paginaInhoudInformatie.introductie;
  $: introductie2Inhoud = paginaInhoudInformatie.introductie2;
  $: wensenUrenInhoud = paginaInhoudInformatie.wensenUren;
  $: wensenAccorderenInhoud = paginaInhoudInformatie.wensenAccorderen;
  $: wensenPlannenInhoud = paginaInhoudInformatie.wensenPlannen;
  $: wensenFacturerenInhoud = paginaInhoudInformatie.wensenFactureren;
  $: matchInhoud = paginaInhoudInformatie.match;

  // opslaan variabel organisatie om mee te geven aan de Match
  let organisatie;

  let wensenUrenAntwoorden = [];
  let wensenAccorderenAntwoorden = [];
  let wensenPlannenAntwoorden = [];
  let wensenFacturerenAntwoorden = [];
</script>

<body>
  {#if huidigePagina > 0}
    <ProgressTracker {huidigePagina} />
  {/if}
  {#if huidigePagina === 0}
    <Startpagina {veranderPagina} {startpaginaInhoud} />
  {/if}
  {#if huidigePagina === 1}
    <Introductie
      {veranderPagina}
      {introductieInhoud}
      on:updateValue={(val) => (organisatie = val.detail)}
    />
  {/if}
  {#if huidigePagina === 2}
    <Introductie2 {veranderPagina} {vorigePagina} {introductie2Inhoud} />
  {/if}
  {#if huidigePagina === 3}
    <WensenUren
      {veranderPagina}
      {vorigePagina}
      {wensenUrenInhoud}
      on:updateAntwoorden={(val) =>
        (wensenUrenAntwoorden = val.detail.antwoorden)}
    />
  {/if}
  {#if huidigePagina === 4}
    <WensenAccorderen
      {veranderPagina}
      {vorigePagina}
      {wensenAccorderenInhoud}
      on:updateAntwoorden={(val) =>
        (wensenAccorderenAntwoorden = val.detail.antwoorden)}
    />
  {/if}
  {#if huidigePagina === 5}
    <WensenPlannen
      {veranderPagina}
      {vorigePagina}
      {wensenPlannenInhoud}
      on:updateAntwoorden={(val) =>
        (wensenPlannenAntwoorden = val.detail.antwoorden)}
    />
  {/if}
  {#if huidigePagina === 6}
    <WensenFactureren
      {veranderPagina}
      {vorigePagina}
      {wensenFacturerenInhoud}
      on:updateAntwoorden={(val) =>
        (wensenFacturerenAntwoorden = val.detail.antwoorden)}
    />
  {/if}
  {#if huidigePagina === 7}
    <Match
      {veranderPagina}
      {vorigePagina}
      {matchInhoud}
      {organisatie}
      {wensenUrenAntwoorden}
      {wensenAccorderenAntwoorden}
      {wensenPlannenAntwoorden}
      {wensenFacturerenAntwoorden}
    />
  {/if}
  {#if huidigePagina === 8}
    <Kosten {veranderPagina} {vorigePagina} {buttontekst} {tekstonderdeel} />
  {/if}
</body>

<style>
</style>
