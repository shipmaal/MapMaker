import * as L from 'leaflet';

// Declare the leaflet module so we can modify it
declare module 'leaflet' {

  export interface IEasyPrintConstructorOptions {
    title: string;
    position: string;
    exportOnly: boolean;
    hideControlContainer: boolean;
    hidden: boolean;
  }

  export interface EasyPrint extends L.Control {
  }

  export function easyPrint(options?: IEasyPrintConstructorOptions): EasyPrint;

}
