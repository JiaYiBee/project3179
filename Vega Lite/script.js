var graph_1 = "debug.json";

vegaEmbed("#map1", graph_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
