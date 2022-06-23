import * as PIXI from 'pixi.js'
import backgroundImage from "./images/background.png"
import { Camera } from "./camera";

export class Game{
    
    pixiWidth = 800;
    pixiHeight = 450;
    camera: Camera
    pixi: PIXI.Application
    tekstbox1Image: PIXI.Sprite
    background:PIXI.Sprite

    constructor(){
    
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        
        this.pixi.loader
            .add('backgroundTexture',backgroundImage)
            
        this.pixi.loader.load(()=>this.doneLoading());

        
        
    }
    
    doneLoading() {
        this.background = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        this.background.scale.set(1.32);

        this.pixi.stage.addChild(this.background)
        
        this.camera = new Camera(-153,-418,120,282, this.pixi, this)
        this.pixi.ticker.add((delta) => this.update(5));
    }

    update(delta: number) {
    }
}

new Game();
