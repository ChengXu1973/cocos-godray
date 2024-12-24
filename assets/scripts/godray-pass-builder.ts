import { _decorator, gfx, Material, renderer, rendering } from "cc";
import { BuiltinPipelinePassBuilder } from "./builtin-pipeline-pass-builder";
const { ccclass, disallowMultiple, menu, property } = _decorator;

@ccclass("GodrayPassBuilder")
@menu("Rendering/GodrayPassBuilder")
@disallowMultiple
export class GodrayPassBuilder extends BuiltinPipelinePassBuilder {
    @property(Material)
    material: Material | null = null;

    onEnable() {
        super.onEnable();
    }

    onDisable() {
        super.onDisable();
    }

    // ------------------- rendering.PipelinePassBuilder -------------------

    configCamera(
        camera: Readonly<renderer.scene.Camera>,
        pplConfigs: { readonly [name: string]: any },
        cameraConfigs: { [name: string]: any }
    ) {
        cameraConfigs.enableGodray = this.enabled && !!this.material;
        if (cameraConfigs.enableGodray) {
            cameraConfigs.enableFullPipeline = true;
            cameraConfigs.remainingPasses++;
        }
    }

    setup(
        ppl: rendering.BasicPipeline,
        pplConfigs: { readonly [name: string]: any },
        cameraConfigs: { readonly [name: string]: any },
        camera: renderer.scene.Camera,
        context: { [name: string]: any },
        prevRenderPass?: rendering.BasicRenderPassBuilder
    ) {
        if (!cameraConfigs.enableGodray) {
            return prevRenderPass;
        }
        (cameraConfigs.remainingPasses as number)--;
        if (cameraConfigs.remainingPasses === 0) {
            return this._addGodrayPasses(
                ppl,
                pplConfigs,
                cameraConfigs,
                this.material,
                camera,
                cameraConfigs.width,
                cameraConfigs.height,
                context.colorName,
                context.depthStencilName,
                cameraConfigs.colorName
            );
        } else {
            const prefix = cameraConfigs.enableShadingScale
                ? `ScaledRadiance`
                : `Radiance`;
            const outputRadianceName = this.getPingPongRenderTarget(
                context.colorName,
                prefix,
                cameraConfigs.renderWindowId
            );
            const inputRadianceName = context.colorName;
            context.colorName = outputRadianceName;
            return this._addGodrayPasses(
                ppl,
                pplConfigs,
                cameraConfigs,
                this.material,
                camera,
                cameraConfigs.width,
                cameraConfigs.height,
                inputRadianceName,
                context.depthStencilName,
                outputRadianceName
            );
        }
    }

    private _addGodrayPasses(
        ppl: rendering.BasicPipeline,
        pplConfigs: { readonly [name: string]: any },
        cameraConfigs: { readonly [name: string]: any },
        matrial: Material,
        camera: renderer.scene.Camera,
        width: number,
        height: number,
        inputRadiance: string,
        inputDepthStencil: string,
        outputRadianceName: string
    ): rendering.BasicRenderPassBuilder {
        const pass = ppl.addRenderPass(width, height, "godray");
        pass.addRenderTarget(
            outputRadianceName,
            gfx.LoadOp.LOAD,
            gfx.StoreOp.STORE
        );
        pass.addTexture(inputRadiance, "depthTexture");
        pass.addQueue(rendering.QueueHint.OPAQUE).addCameraQuad(camera, matrial, 0);
        return pass;
    }
}
