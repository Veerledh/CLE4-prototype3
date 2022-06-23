import * as PIXI from 'pixi.js'
import { AbstractRenderer, Application, Renderer } from 'pixi.js';

import { Game } from './game';


export class Camera {

    pixi: PIXI.Application;
    game: Game
    
    constructor(x: number, y: number, width: number, height: number, pixi: PIXI.Application, game: Game) {
        
        this.pixi = pixi
        this.game = game

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    onKeyDown(e:KeyboardEvent){
        switch (e.key.toUpperCase()) {
            case "C":
                console.log('keydown');
                this.takeScreenshot()

        }
    }
    
    action() {
        console.log("klik")
        this.takeScreenshot()
    }

    
    takeScreenshot() {
        let renderer: PIXI.Renderer = this.pixi.renderer as PIXI.Renderer
        let extract = new PIXI.Extract(renderer)
        let canvasPixels = extract.base64(this.pixi.stage)
        console.log(canvasPixels)

        let sprite = PIXI.Sprite.from(canvasPixels)
        sprite.x = 100
        sprite.y = 100
        sprite.width = 600
        sprite.height = 300
        this.pixi.stage.addChild(sprite)

    }

}
