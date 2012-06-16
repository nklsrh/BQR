function Enemy(){
        
        this.type = 0;
        //0:crab
        //1:bat
        this.walkAnim = 0;
        this.screenX, this.screenY;
        this.startRunSpeed = 0.3;
	this.slowestSpeed = 0.2;
        this.runSpeed = this.startRunSpeed;
        this.jumpStrength = 0;
        this.height = 0;
        this.accY = 0;
        this.level = 0;
	this.stuck = false;
	this.startScreenX = CANVAS_WIDTH * 0.15;
	this.positionTile = 0;

        this.Setup = function(tile, type){
                this.type = type;
                this.positionTile = tile;
                this.screenY = CANVAS_HEIGHT * 0.63;
        }

        this.Update = function(){
                this.Walking();
        }
        
        this.Physics = function(){
        }

        this.Walking = function(){
                this.walkAnim += (30/FPS);
                if(this.walkAnim > 13)
                        this.walkAnim = 0;
        }

        this.Draw = function(ctx){
                this.DrawPlayer(ctx);
        }

        this.DrawPlayer = function(ctx){
                switch(this.type){
                        case 0:
                                this.DrawNoob(ctx);
                        break;
                        case 1:
                                this.DrawFirefox(ctx);
                        break;
                }
        }

        this.DrawNoob = function(ctx){
                ctx.drawImage(assets.crab, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.noob.width/5, 8 * assets.noob.height/9, assets.noob.width/5, assets.noob.height/9,  ((this.positionTile)*canvas.width*0.2)+env.screenX, this.screenY * (canvas.height/CANVAS_HEIGHT), canvas.width*0.1, canvas.width*0.1);
        }

        this.DrawFirefox = function(ctx){
                ctx.drawImage(assets.firefox, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.firefox.width/8, 1 * assets.firefox.height/9, assets.firefox.width/8, assets.firefox.height/9, env.screenX * (canvas.width/CANVAS_WIDTH), this.screenY * (canvas.height/CANVAS_HEIGHT), canvas.width*0.1, canvas.width*0.1);
        }
}
