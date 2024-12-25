import { _decorator, Component, RichText } from "cc";
const { ccclass } = _decorator;

@ccclass("License")
export class License extends Component {
    onLoad() {
        this.getComponent(RichText)!.string =
            `<on click="jumpModel"><b>"Forest House"</b></on>` +
            ` by peachyroyalty is licensed under ` +
            `<on click="jumpLicense"><b>Creative Commons Attribution-NonCommercial</b></on>.`;
    }

    jumpModel() {
        window.open("https://skfb.ly/6QSKT");
    }

    jumpLicense() {
        window.open("http://creativecommons.org/licenses/by-nc/4.0/");
    }
}
