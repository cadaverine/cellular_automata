let dataMaker = null;

onmessage = (e) => {
  if (typeof ImageDataMaker === "undefined") {
    importScripts('https://cadaverine.github.io/cellular_automata/imagedatamaker.js');
    // importScripts('imagedatamaker.js');
  }
  
  let command = e.data.command;
  let params = e.data.params;

  switch(command) {
    case "construct":
      dataMaker = new ImageDataMaker(params.width, params.height);
      break;

    case "create data":
      if (dataMaker) {
        let data = dataMaker.createImageData(params.matrix, params.colors);
        self.postMessage( data.buffer, [data.buffer] );
      }
      break;
  }
}