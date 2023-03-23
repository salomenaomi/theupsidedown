<script>
  import WensenUren from "./WensenUren.svelte";

  export let veranderPagina;
  export let vorigePagina;
  export let matchInhoud;
  export let organisatie;
  export let wensenUrenAntwoorden;
  export let wensenAccorderenAntwoorden;
  export let wensenPlannenAntwoorden;
  export let wensenFacturerenAntwoorden;

  let activeUren = false;
  let activeAccorderen = false;
  let activePlannen = false;
  let activeFactureren = false;

  console.log(wensenFacturerenAntwoorden);
</script>

<section class="samenvoegen">
  <h2>{matchInhoud.tekstonderdeel1}{organisatie}</h2>
  <div class="ul">
    <div class="li" class:activeUren>
      <button class="match" on:click={() => (activeUren = !activeUren)}>
        <div>
          <h2>{matchInhoud.matchonderdelen[0].title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.373"
            height="13.661"
            viewBox="0 0 27.373 13.661"
          >
            <g
              id="Group_12436"
              data-name="Group 12436"
              transform="translate(2.114 2.114)"
            >
              <line
                id="Line_1628"
                data-name="Line 1628"
                x2="11.148"
                y2="9.433"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
              <line
                id="Line_1629"
                data-name="Line 1629"
                y1="9.433"
                x2="12.005"
                transform="translate(11.148)"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
        <div>
          {#if wensenUrenAntwoorden.find((value) => value.text === "Ik wil graag meer inzicht krijgen in de werkzaamheden die mijn medewerkers registreren.")}
            <h3>
              {matchInhoud.matchonderdelen[0].onderdelenStelling1[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[0].onderdelenStelling1[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[0].onderdelenStelling1[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[0].onderdelenStelling1[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[0].onderdelenStelling1[1].text}</p>
            <p>{matchInhoud.matchonderdelen[0].onderdelenStelling1[1].voordeel}</p>
          {/if}
          {#if wensenUrenAntwoorden.find((value) => value.text === "Ik zou het fijn vinden om grip te hebben op de contractuele afspraken die ik met mijn medewerkers heb.")}
            <h3>
              {matchInhoud.matchonderdelen[0].onderdelenStelling2[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[0].onderdelenStelling2[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[0].onderdelenStelling2[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[0].onderdelenStelling2[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[0].onderdelenStelling2[1].text}</p>
          {/if}
        </div>
      </button>
    </div>
    <div class="li" class:activeAccorderen>
      <button
        class="match accorderen"
        on:click={() => (activeAccorderen = !activeAccorderen)}
      >
        <div>
          <h2>{matchInhoud.matchonderdelen[1].title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.373"
            height="13.661"
            viewBox="0 0 27.373 13.661"
          >
            <g
              id="Group_12436"
              data-name="Group 12436"
              transform="translate(2.114 2.114)"
            >
              <line
                id="Line_1628"
                data-name="Line 1628"
                x2="11.148"
                y2="9.433"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
              <line
                id="Line_1629"
                data-name="Line 1629"
                y1="9.433"
                x2="12.005"
                transform="translate(11.148)"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
        <div>
          {#if wensenAccorderenAntwoorden.find((value) => value.text === "Ik zou graag willen dat de uren worden goedgekeurd door één of meerdere interne of externe managers.")}
            <h3>
              {matchInhoud.matchonderdelen[1].onderdelenStelling1[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling1[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling1[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling1[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling1[1].text}</p>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling1[1].voordeel}</p>
          {/if}
          {#if wensenAccorderenAntwoorden.find((value) => value.text === "Ik zou graag inzage hebben in de staat van de ingeleverde uren binnen het accordeerproces.")}
            <h3>
              {matchInhoud.matchonderdelen[1].onderdelenStelling2[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling2[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling2[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling2[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling2[1].text}</p>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling2[1].voordeel}</p>
          {/if}
          {#if wensenAccorderenAntwoorden.find((value) => value.text === "Ik zou graag mijn medewerkers willen notificeren over hun ingeleverde of te accorderen uren.")}
            <h3>
              {matchInhoud.matchonderdelen[1].onderdelenStelling3[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling3[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling3[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling3[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling3[1].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[1].onderdelenStelling3[2].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling3[2].text}</p>
            <p>{matchInhoud.matchonderdelen[1].onderdelenStelling3[2].voordeel}</p>
          {/if}
        </div>
      </button>
    </div>
    <div class="li" class:activePlannen>
      <button
        class="match plannen"
        on:click={() => (activePlannen = !activePlannen)}
      >
        <div>
          <h2>{matchInhoud.matchonderdelen[2].title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.373"
            height="13.661"
            viewBox="0 0 27.373 13.661"
          >
            <g
              id="Group_12436"
              data-name="Group 12436"
              transform="translate(2.114 2.114)"
            >
              <line
                id="Line_1628"
                data-name="Line 1628"
                x2="11.148"
                y2="9.433"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
              <line
                id="Line_1629"
                data-name="Line 1629"
                y1="9.433"
                x2="12.005"
                transform="translate(11.148)"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
        <div>
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Binnen onze organisatie is het belangrijk dat we ons gezamenlijk aan de begroting houden.")}
            <h3>
              {matchInhoud.matchonderdelen[2].onderdelenStelling1[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling1[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling1[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling1[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling1[1].text}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Ik wil graag in zien wat de voortgang is van mijn project.")}
            <h3>
              {matchInhoud.matchonderdelen[2].onderdelenStelling2[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling2[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling2[0].text}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Wij hebben er baat bij als onze data visueel in te zien is. Ik wil graag bedrijfstrends inzichtelijk maken.")}
            <h3>
              {matchInhoud.matchonderdelen[2].onderdelenStelling3[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling3[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling3[0].text}</p>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling3[1].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling3[1].text}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Wij werken met projecten waarbij startdata en deadlines (sterk) gehandhaafd moeten worden.")}
            <h3>
              {matchInhoud.matchonderdelen[2].onderdelenStelling4[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling4[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling4[0].text}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Ik wil graag controle houden over het verloop mijn projecten.")}
            <h3>
              {matchInhoud.matchonderdelen[2].onderdelenStelling5[0].stelling}
            </h3>
            <h4>
              {matchInhoud.matchonderdelen[2].onderdelenStelling5[0].title}
            </h4>
            <p>{matchInhoud.matchonderdelen[2].onderdelenStelling5[0].text}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Ik wil graag het verlof van mijn medewerkers registreren en inzichtelijk maken.")}
          <h3>
            {matchInhoud.matchonderdelen[2].onderdelenStelling6[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[2].onderdelenStelling6[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[2].onderdelenStelling6[0].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[2].onderdelenStelling6[1].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[2].onderdelenStelling6[1].text}</p>
          <p>{matchInhoud.matchonderdelen[2].onderdelenStelling6[1].voordeel}</p>
          {/if}
          {#if wensenPlannenAntwoorden.find((value) => value.text === "Ik heb baat bij een optie voor een agenda die ik of mijn medewerker zelf kan beheren.")}
          <h3>
            {matchInhoud.matchonderdelen[2].onderdelenStelling7[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[2].onderdelenStelling7[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[2].onderdelenStelling7[0].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[2].onderdelenStelling7[1].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[2].onderdelenStelling7[1].text}</p>
          {/if}
        </div>
      </button>
    </div>
    <div class="li" class:activeFactureren>
      <button
        class="match factureren"
        on:click={() => (activeFactureren = !activeFactureren)}
      >
        <div>
          <h2>Factureren</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.373"
            height="13.661"
            viewBox="0 0 27.373 13.661"
          >
            <g
              id="Group_12436"
              data-name="Group 12436"
              transform="translate(2.114 2.114)"
            >
              <line
                id="Line_1628"
                data-name="Line 1628"
                x2="11.148"
                y2="9.433"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
              <line
                id="Line_1629"
                data-name="Line 1629"
                y1="9.433"
                x2="12.005"
                transform="translate(11.148)"
                fill="none"
                stroke="#6a6a6a"
                stroke-linecap="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
        <div>
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Ik wil graag uren laten registreren en deze factureren vanuit 1 systeem.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling1[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling1[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling1[0].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling1[1].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling1[1].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling1[2].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling1[2].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Het lijkt me handig om overige kosten ook toe te kunnen voegen aan een factuur.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling2[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling2[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling2[0].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling2[1].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling2[1].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Naast het factureren van uren wil ik ook (periodieke) vaste bedragen kunnen factureren.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling3[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling3[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling3[0].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Ons bedrijf factureert uren altijd direct aan het eind van de maand.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling4[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling4[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling4[0].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Wij maken gebruik van een van de volgende boekhoudpakketten: AFAS, Twinfield, Snelstart, Yuki of Exact Online.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling5[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling5[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling5[0].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Ik wil graag inzage in de financiële staat of voortgang van mijn projecten.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling6[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling6[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling6[0].text}</p>
          {/if}
          {#if wensenFacturerenAntwoorden.find((value) => value.text === "Ik werk met ZZP’ers of ik ben een detacheerder.")}
          <h3>
            {matchInhoud.matchonderdelen[3].onderdelenStelling7[0].stelling}
          </h3>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling7[0].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling7[0].text}</p>
          <h4>
            {matchInhoud.matchonderdelen[3].onderdelenStelling7[1].title}
          </h4>
          <p>{matchInhoud.matchonderdelen[3].onderdelenStelling7[1].text}</p>
          {/if}
        </div>
      </button>
    </div>
  </div>
  <div class="buttons">
    <button class="terugbutton" on:click={vorigePagina}>
      {matchInhoud.buttons[0].text}
    </button>
    <button on:click={veranderPagina}> {matchInhoud.buttons[1].text} </button>
  </div>
</section>

<style>
  section {
    padding-left: 1em;
  }

  button:nth-of-type(2) {
    padding: 0.5em 0.7em;
  }

  .ul {
    text-align: start;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
  }

  .li {
    list-style-type: none;
    border: 2px solid var(--darkgrey);
    padding: 0.3em 0em 0.5em 0.5em;
    margin: 0.5em;
    border-radius: 0.5em;
    flex-direction: row;
    justify-content: flex-start;
  }

  .match {
    box-shadow: none;
    color: var(--black);
    background-color: var(--white);
    padding: 0.1em 0.5em 0.1em 0.5em;
  }

  .match div:first-of-type {
    box-shadow: none;
    color: var(--black);
    background-color: var(--white);
    padding: 0em 0.5em 0em 0em;
    display: flex;
    flex-direction: row;
    column-gap: 9.9em;
  }

  .match h2 {
    padding-left: 0;
    font-weight: 600;
    color: var(--black);
    text-align: start;
  }

  .accorderen div:first-of-type {
    column-gap: 12em;
  }

  .plannen div:first-of-type {
    column-gap: 7.6em;
  }

  .factureren div:first-of-type {
    column-gap: 12.3em;
  }

  svg {
    display: flex;
    width: 1.5em;
  }

  .activeUren button > div > svg > g > line,
  .activeAccorderen button > div > svg > g > line,
  .activePlannen button > div > svg > g > line,
  .activeFactureren button > div > svg > g > line {
    stroke: var(--orange);
  }

  .activeUren button > div > svg,
  .activeAccorderen button > div > svg,
  .activePlannen button > div > svg,
  .activeFactureren button > div > svg {
    transform: rotate(180);
  }

  .activeUren,
  .activeAccorderen,
  .activePlannen,
  .activeFactureren {
    border-color: var(--orange);
  }

  h3,
  h4,
  p {
    padding-left: 0;
    display: none;
  }

  div.buttons {
    margin-top: 2em;
  }

  button > div {
    display: block;
  }

  .activeUren h3,
  .activeAccorderen h3,
  .activePlannen h3,
  .activeFactureren h3,
  .activeUren h4,
  .activeAccorderen h4,
  .activePlannen h4,
  .activeFactureren h4,
  .activeUren p,
  .activeAccorderen p,
  .activePlannen p,
  .activeFactureren p {
    display: block;
    font-size: 12px;
  }
</style>
