<script>
  import Progress1 from '../../assets/progress1.svelte';
  import Progress2 from '../../assets/progress2.svelte';
  import Progress3 from '../../assets/progress3.svelte';
  import Progress4 from '../../assets/progress4.svelte';
  export let huidigePagina;
</script>


<div class="progresstracker">
  {#if huidigePagina === 1}
  <Progress1 />
  {:else if huidigePagina === 2}
  <Progress1 />
  {:else if huidigePagina === 3}
  <Progress2 />
  {:else if huidigePagina === 4}
  <Progress2 />
  {:else if huidigePagina === 5}
  <Progress2 />
  {:else if huidigePagina === 6}
  <Progress2 />
  {:else if huidigePagina === 7}
  <Progress3 />
  {:else if huidigePagina === 8}
  <Progress4 />
  {/if}
</div>

<style>
  .progresstracker {
    background-color: #FFFFFF;
    padding: 0em 0em 0em 0em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
  </style>