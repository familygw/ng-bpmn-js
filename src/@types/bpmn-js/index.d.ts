/* BPMN-JS descriptors */
declare module 'bpmn-js' {

  export abstract class BaseViewer {
    constructor(options?: any);
  }

  export abstract class Viewer extends BaseViewer {
    constructor(options?: any);
  }
}

declare module 'bpmn-js/lib/BaseModeler' {
  import { BaseViewer } from "bpmn-js";

  export abstract class BaseModeler extends BaseViewer {
    constructor(options?: any);
  }
}

declare module 'bpmn-js/lib/Modeler' {
  import { Viewer } from "bpmn-js";

  export default class Modeler extends Viewer {
    constructor(options?: any);

    createDiagram(): Promise<any>;
  }
}