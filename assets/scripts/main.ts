import { _decorator, Camera, CCFloat, Component, EventTouch, input, Input, instantiate, Material, Node, Renderer, screen, TransformBit, v2, v3 } from "cc";
const { ccclass, property } = _decorator;

const start = v2();
const current = v2();
const rotate = v3();

const DEPTH_LAYER = 1 << 0;

function setLayer(n: Node, l: number) {
    n.layer = l;
    n.children?.forEach(c => setLayer(c, l));
}

@ccclass("Main")
export class Main extends Component {
    @property(Node)
    scene: Node;

    @property(CCFloat)
    spinSpeed = 0.8;

    @property(Material)
    depthMaterial: Material;

    @property(Camera)
    sceneCamera: Camera;

    @property(Camera)
    depthCamera: Camera;

    @property(Camera)
    shadowCamera: Camera;

    private _clone: Node;

    onLoad() {
        input.on(Input.EventType.TOUCH_MOVE, this._move, this);
        screen.on("window-resize", this._resize, this);
    }

    onEnable() {
        this._resize();
        this._setScene();
        this._setUniform();
    }

    update() {
        this.depthCamera.enabled = !!this.scene.hasChangedFlags;
        this.shadowCamera.enabled = !!this.scene.hasChangedFlags;
        this._clone.active = !!this.scene.hasChangedFlags;
        if (this.scene.hasChangedFlags) {
            this._clone.setPosition(this.scene.position);
            this._clone.setRotation(this.scene.rotation);
            this._clone.setScale(this.scene.scale);
        }
    }

    private _move(evt: EventTouch) {
        evt.getPreviousLocation(start);
        evt.getLocation(current);
        const moveX = current.x - start.x;
        rotate.set(this.scene.eulerAngles);
        rotate.y += this.spinSpeed * moveX;
        this.scene.setRotationFromEuler(rotate);
    }

    private _resize() {
        const { width, height } = screen.windowSize;
        this.depthCamera.targetTexture.resize(width, height);
        this.scene.hasChangedFlags |= TransformBit.POSITION;
    }

    private _setScene() {
        this._clone = instantiate(this.scene);
        setLayer(this._clone, DEPTH_LAYER);
        this.scene.parent.addChild(this._clone);
        this._clone
            .getComponentsInChildren(Renderer)
            ?.forEach((mat) => mat.setSharedMaterial(this.depthMaterial, 0));
    }

    private _setUniform() {
        // 需要主动调用update更新相机的视图投影矩阵
        this.shadowCamera.camera.update(true);
        // // godray
        // const godrayPass0 = this.godray.sharedMaterial.passes[0];
        // godrayPass0.setUniform(
        //     godrayPass0.getHandle("shadow_matViewProj"),
        //     this.shadowCamera.camera.matViewProj
        // );
    }
}
