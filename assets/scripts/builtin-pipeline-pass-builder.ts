import { _decorator, CCInteger, Component, rendering } from "cc";
const { ccclass, disallowMultiple, menu, property } = _decorator;

@ccclass("BuiltinPipelinePassBuilder")
@menu("Rendering/BuiltinPipelinePassBuilder")
@disallowMultiple
export class BuiltinPipelinePassBuilder
    extends Component
    implements rendering.PipelinePassBuilder {
    @property(CCInteger)
    configOrder = 0;

    @property(CCInteger)
    renderOrder = 150;

    private _settings: {
        _passes?: rendering.PipelinePassBuilder[];
    };

    onEnable() {
        this._settings = (
            this.getComponent("BuiltinPipelineSettings") as any
        ).getPipelineSettings();
        if (!Object.prototype.hasOwnProperty.call(this._settings, "_passes")) {
            Object.defineProperty(this._settings, "_passes", {
                value: [],
                configurable: false,
                enumerable: false,
                writable: true,
            });
        }
        this._settings._passes.push(this);
    }

    onDisable() {
        const passes = this._settings._passes;
        const idx = passes.indexOf(this);
        passes.splice(idx, 1);
    }

    // ------------------- rendering.PipelinePassBuilder -------------------

    getConfigOrder(): number {
        return this.configOrder;
    }

    getRenderOrder(): number {
        return this.renderOrder;
    }

    protected getPingPongRenderTarget(
        prevName: string,
        prefix: string,
        id: number
    ): string {
        if (prevName.startsWith(prefix)) {
            return `${prefix}${1 - Number(prevName.charAt(prefix.length))}_${id}`;
        } else {
            return `${prefix}0_${id}`;
        }
    }
}
