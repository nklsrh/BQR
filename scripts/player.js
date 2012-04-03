function Player(){
        
        this.walkAnim = 0;
        this.screenX, this.screenY;
        this.runSpeed = 0.3;

        this.Setup = function(){
                this.screenX = canvas.width/5;
                this.screenY = canvas.height/2;
        }

        this.Update = function(){
                this.walkAnim ++;
                if(this.walkAnim > 13)
                        this.walkAnim = 0;
        }

        this.Draw = function(ctx){
                ctx.drawImage(assets.player, parseInt(this.walkAnim*this.runSpeed) % 4 * assets.player.width/8, 1 * assets.player.height/9, assets.player.width/8, assets.player.height/9, this.screenX, this.screenY, 100, 100);
        }
}
