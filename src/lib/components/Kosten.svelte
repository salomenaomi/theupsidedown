<script>
    export let veranderPagina;
    export let vorigePagina;
    export let buttontekst;
    export let tekstonderdeel;
  </script>
  
  <section class="samenvoegen">
    <h2>{tekstonderdeel.tekst1}</h2>
    <div class="container">
      <div class="row one">
        <div class="col">
          <p>Basisbedrag</p>
        </div>
        <div class="col">
          <p>Per gebruiker</p>
        </div>
        <div class="col">
          <p>Per maand</p>
        </div>
      </div>
      <div class="row two">
        <div class="col">
          <p>€25,-</p>
        </div>
        <div class="col">
          <p>+</p>
        </div>
        <div class="col">
          <p>€3,50</p>
        </div>
        <div class="col">
          <p>=</p>
        </div>
        <div class="col">
          <p>€</p>
        </div>
      </div>
      <div class="row three">
        <div class="col">
          <p>Per kwartaal</p>
        </div>
      </div>
      <div class="row four">
        <div class="col-4">
          <p>€</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button class="terugbutton" on:click={vorigePagina} > {buttontekst.button1} </button>
      <button on:click={veranderPagina} > {buttontekst.button2} </button>
    </div>
  </section>

  <style>
    section {
      padding-left: 1em;
    }

    button:nth-of-type(2) {
      padding: 0.5em 0.7em
    }

    div {
      padding: 0;
    }

    .one div {
      width: 33%;
      font-weight: 600;
    }

    .one div p {
      font-size: 11px;
    }

    .two div p {
      font-size: 20px;
      font-weight: 400;
      padding-left: 0.6em;
    }

    .two div:first-of-type {
      max-width: 23%;
    }

    .two div:nth-of-type(2) {
      max-width: 11%;
    }

    .two div:nth-of-type(3) {
      max-width: 30%;
    }

    .two div:nth-of-type(4) {
      max-width: 13%;
    }

    .two div:nth-of-type(5) {
      max-width: 5%;
    }

    div.buttons {
      margin-top: 2em;
    }
  </style>