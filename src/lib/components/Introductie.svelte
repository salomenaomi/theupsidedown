<script>
  import { createEventDispatcher } from 'svelte';
  
  export let veranderPagina;
  export let introductieInhoud;

  // opslaan naam en organisatie
  $: naam = "";
  $: organisatie = "";

  // waarde die in de input getypt wordt wordt in de app geprint
  let naamWaarde =(e)=>naam=e.target.value;
  const dispatch = createEventDispatcher();

  let organisatieWaarde = (e) => {
   organisatie = e.target.value
   dispatch('updateValue', e.target.value);
  }

  // als er in de input tekst getypt wordt, veranderd de border-color
  $: ingevuldeInputKleur = "#6A6A6A";
  $: {
    if (naam.length >= 1) {
    ingevuldeInputKleur = "#FF9900";
    }
    else if (naam.length < 1) {
    ingevuldeInputKleur = "#6a6a6a";
    }
  }

  $: ingevuldeInputKleur2 = "#6A6A6A";
  $: {
    if (organisatie.length >= 1) {
    ingevuldeInputKleur2 = "#FF9900";
    }
    else if (organisatie.length < 1) {
    ingevuldeInputKleur2 = "#6a6a6a";
    }
  }

  console.log(introductieInhoud);
</script>
  
<section class="samenvoegen">
  <h2>{introductieInhoud.tekst1}</h2>
  <h2>{introductieInhoud.vraag}</h2>
  <form>
    <label for="naam">{introductieInhoud.label1}</label>
    <input type="text" placeholder="Uw naam..." on:input={naamWaarde} style="border-color: {ingevuldeInputKleur};" >
    <label for="organisatie">{introductieInhoud.label2}</label>
    <input type="text" placeholder="Naam van de organisatie..." on:input={organisatieWaarde} style="border-color: {ingevuldeInputKleur2};" bind:value={organisatie}>
    {#if naam.length < 1 || organisatie.length < 1}
    <button type="button" disabled class="disabledButton"> {introductieInhoud.button} </button>
    {:else}
    <button id="button" on:click={veranderPagina} > {introductieInhoud.button} </button>
    {/if}
  </form>
  <p> {naam} {organisatie} </p>
</section>

<style>
  section {
    padding: 0em 1em 1em 1em;
  }

  h2 {
    margin-top: 0;
  }

  h2:first-of-type {
    margin-bottom: 0;
  }

  label {
    align-self: start;
    padding-left: 6em;
    margin-top: 1.5em;
    margin-bottom: 0.1em;
  }

  input {
    background-color: #FFFFFF;
    border: solid #6a6a6a 2px;
    border-radius: 0.5em;
    color: #2a2a2a;
    padding: 0.2em 1.5em 0.2em 0.8em;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 13px;
  }

  input:focus {
    border: solid #FF9900 2px;
    outline: none;
  }

  input::placeholder {
    width: fit-content;
    color: #979797;
  }

  button {
    margin-top: 18em;
  }

  .disabledButton {
    background-color: #e9e8e8;
    color: #979797;
  }
</style>