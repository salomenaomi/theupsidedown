<script>
  export let veranderPagina;
  export let vorigePagina;
  export let introductie2Inhoud;

  let checked;

  $: {
    console.log(checked);
  }

  console.log(introductie2Inhoud);
</script>

<section class="samenvoegen">
  <h2>{introductie2Inhoud.vraag}</h2>
  <form>
    {#each introductie2Inhoud.antwoorden as antwoord}
      <div
      class={`${checked === antwoord.id ? 'radio orangeBorder' : 'radio'}`}>
        <input
        id="radio1"
        type="radio"
        name="radio"
        on:click={() => (checked = antwoord.id)}
      />
      <label 
        for="radio1" 
        id="checkbox-label">
        {antwoord.text}
      </label>
      </div>
    {/each}
    <div>
      <button class="terugbutton" on:click={vorigePagina}>
        {introductie2Inhoud.button1}
      </button>
      <button 
        disabled={checked && checked.length > 0 ? false : true}
        class={`${checked && checked.length > 0 ? '' : 'disabledButton'}`}
        on:click={veranderPagina}
      >
        {introductie2Inhoud.button2}
      </button>
    </div>
  </form>
</section>

<style>
  section {
    padding: 0em 1em 1em 1em;
  }

  h2 {
    margin-top: 0;
    color: #ff9900;
  }

  h2:first-of-type {
    margin-bottom: 2em;
  }

  h2 {
    font-size: 13px;
  }

  .radio {
    background-color: #ffffff;
    border: solid #6a6a6a 2px;
    border-radius: 0.5em;
    color: #2a2a2a;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 13px;
    margin: 1em 0.5em;
    text-align: start;
    /* padding: 0.1em 1.5em 0.1em 0.5em; */
    padding: 0em 1.5em 1.5em 0.4em;
    width: 13em;
    max-height: 1.5em;
  }

  .radio input {
    opacity: 0;
    position: absolute;
  }

  .radio label {
    line-height: 1em;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg id='Ellipse_132' data-name='Ellipse 132' fill='%23fff' stroke='%23707070' stroke-width='2'%3E%3Ccircle cx='10' cy='10' r='10' stroke='none'/%3E%3Ccircle cx='10' cy='10' r='9' fill='none'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 13px;
    padding-left: 1.5em;
    display: inline-block;
  }

  .radio input[type="radio"]:checked ~ label {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.301' height='20' viewBox='0 0 20.301 20'%3E%3Cg id='Group_12658' data-name='Group 12658' transform='translate(-3.699 -26)'%3E%3Cg id='Ellipse_148' data-name='Ellipse 148' transform='translate(4 26)' fill='%23fff' stroke='%23707070' stroke-width='2'%3E%3Ccircle cx='10' cy='10' r='10' stroke='none'/%3E%3Ccircle cx='10' cy='10' r='9' fill='none'/%3E%3C/g%3E%3Cg id='Group_12657' data-name='Group 12657' transform='translate(-738.472 -529.083)'%3E%3Cline id='Line_1593' data-name='Line 1593' x2='4.206' y2='4.206' transform='translate(745 566.108)' fill='none' stroke='%23f90' stroke-linecap='round' stroke-width='4'/%3E%3Cline id='Line_1594' data-name='Line 1594' y1='9.814' x2='9.814' transform='translate(749.206 560.5)' fill='none' stroke='%23f90' stroke-linecap='round' stroke-width='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 13px;
    background-repeat: no-repeat;
  }

  button {
    border-radius: 0.9em;
    padding: 0.5em 2em;
    margin-top: 18em;
  }
  
  .orangeBorder {
    border-color: #ff9900;
  }
</style>