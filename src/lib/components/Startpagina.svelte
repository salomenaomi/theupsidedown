<script>
  import VisualGebruikers from '../../assets/visualgebruikers.svelte';
  export let veranderPagina;
  export let startpaginaInhoud;
</script>
  
<section>
  <h2>{startpaginaInhoud.tekst1}</h2>
  <p>{startpaginaInhoud.tekst2}</p>
  <p>{startpaginaInhoud.tekst3}</p>
  <div>
  <VisualGebruikers />
  </div>
  <button on:click={veranderPagina}>{startpaginaInhoud.buttontekst}</button>
</section>

<style>
  p:last-of-type {
    margin-bottom: 0;
  }
</style>
  