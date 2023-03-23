<script>
  import { createEventDispatcher } from "svelte";

  export let veranderPagina;
  export let vorigePagina;
  export let wensenPlannenInhoud;

  let checked;
  let antwoorden = [];

  const dispatch = createEventDispatcher();

  // Kijkt of antwoord al in de array zit, en voegt hem toe of verwijderd hem.
  const toggleAntwoorden = (antwoord) => {
    console.log(antwoord);
    // Kijk of antwoord al in de array zit
    let findAntwoord = antwoorden.includes(antwoord);

    if (findAntwoord) {
      // Als antwoord al erin staat, verwijder uit de array
      antwoorden = antwoorden.filter((value) => value !== antwoord);
    } else {
      // Als antwoord niet erin staat, voeg hem toe.
      antwoorden = [...antwoorden, antwoord];
    }

    // Stuurt antwoorden door naar "App.svelte" wanneer ze worden geupdate
    dispatch("updateAntwoorden", { antwoorden: antwoorden });
    console.log(antwoorden);
  };

  const x = () => {
    console.log("test");
  };
</script>

<section class="samenvoegen">
  <h2>{wensenPlannenInhoud.vraag}</h2>
  <div>
    {#each wensenPlannenInhoud.antwoorden as antwoord, index}
      <div class={`checkbox ${antwoorden.includes(antwoord) ? "checked" : ""}`}>
        <input
          id={`${index}`}
          type="checkbox"
          on:click={() => toggleAntwoorden(antwoord)}
        />
        <label for={`${index}`}>{antwoord.text}</label>
      </div>
    {/each}
    <button class="terugbutton" on:click={vorigePagina}>
      {wensenPlannenInhoud.button1}
    </button>
    {#if antwoorden.length < 1}
      <button disabled class="disabledButton">
        {wensenPlannenInhoud.button2}
      </button>
    {:else}
      <button on:click={veranderPagina}>
        {wensenPlannenInhoud.button2}
      </button>
    {/if}
  </div>
</section>

<style>
  section {
    background-color: #ffffff;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 0em 1em 1em 1em;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 2em;
  }

  .checkbox {
    background-color: #ffffff;
    border: solid #6a6a6a 2px;
    border-radius: 0.5em;
    color: #2a2a2a;
    margin: 1em 0em;
    text-align: start;
    min-height: 5.4em;
    width: 100%;
    display: flex;
    padding-left: 0.75em;
    display: flex;
    align-items: center;
  }

  button {
    padding: 0.5em 0.8em;
    margin-top: 1em;
    border: none;
    min-height: 2.3em;
    margin-bottom: 0.5em;
  }

  .terugbutton {
    background-color: var(--white);
    color: var(--black);
    border: 2px solid var(--orange);
    margin-right: 0.5em;
  }

  .checkbox > label {
    display: flex;
    align-items: center;
  }

  .checkbox input {
    appearance: none;
    padding: 0.36em;
    border: 2px solid #6a6a6a;
    border-radius: 0.2em;
    margin-right: 1em;
    height: 100%;
  }

  .checkbox input:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25.657' height='19.657' viewBox='0 0 25.657 19.657'%3E%3Cg id='Check_Icon' data-name='Check Icon' transform='translate(2.828 2.828)'%3E%3Cline id='Line_1593' data-name='Line 1593' x2='6' y2='6' transform='translate(0 8)' fill='none' stroke='%23f90' stroke-linecap='round' stroke-width='4'/%3E%3Cline id='Line_1594' data-name='Line 1594' y1='14' x2='14' transform='translate(6)' fill='none' stroke='%23f90' stroke-linecap='round' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 0.7em 0.7em;
    background-repeat: no-repeat;
  }

  .checked {
    border: solid var(--orange) 2px !important;
  }
</style>
