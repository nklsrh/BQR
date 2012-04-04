function Player(){
        
        this.walkAnim = 0;
        this.screenX, this.screenY;
        this.startRunSpeed = 0.3;
        this.runSpeed = this.startRunSpeed;
        this.jumpStrength = 0;
        this.height = 0;
        this.accY = 0;
        this.level = 0;

        this.Setup = function(){
                this.screenX = canvas.width * 0.15;
                this.screenY = canvas.height * 0.55;
                this.accY = 0;
                this.jumpStrength = 0;
                this.height = 0;
                this.walkAnim = 0;
                this.runSpeed = this.startRunSpeed;
        }

        this.Update = function(){
                this.Physics();   
                this.Input();
                this.Walking(); 
                this.Dead();  
                this.FinishLevel();                          
        }
        
        this.Physics = function(){
                this.height += this.accY;
                this.accY -= 5;
                this.screenY = (canvas.height * 0.6) - this.height;
                if(Math.abs(this.accY) > this.height || this.height <= 0){
                        if(env.NoGround[env.currentTile] == 0){
                                this.accY *= 1.2;
                                this.runSpeed *= 0.65;
                        }
                        else{
                                this.height = 0;
                                this.accY = 0;
                                if(this.runSpeed < this.startRunSpeed)
                                        this.runSpeed = this.startRunSpeed;
                        }
                }
        }

        this.Input = function(){
                if(IsJumpButtonDown){
                        if(this.jumpStrength < 20)
                                this.jumpStrength = 20;
                        if(this.jumpStrength <= 45)
                                this.jumpStrength += 4;
                }
                if(!IsJumpButtonDown && WasJumpButtonDown){
                        this.Jump(this.jumpStrength);
                        WasJumpButtonDown = false;
                        console.log('mouseclicked');
                }
        }
        
        this.Walking = function(){
                this.walkAnim ++;
                if(this.walkAnim > 13)
                        this.walkAnim = 0;

                if(this.runSpeed < this.startRunSpeed){
                        if(env.NoGround[env.currentTile] != 0 && this.height < -1){
                                this.accY = -10;
                                this.runSpeed = this.startRunSpeed;    
                        }
                        else{
                                this.runSpeed *= 0.65; 
                        }                        
                }
                this.runSpeed += 0.0003;
        }

        this.Dead = function(){
                if(this.height < -4000){
                        game.NewGame();
                }
        }

        this.FinishLevel = function(){
                if(env.currentTile == env.TileCount - 5){
                        game.NewGame();
                }
        }

        this.Jump = function(strength){
                if(this.height == 0){
                        this.accY = strength;
                        console.log('jumpstart');
                        this.jumpStrength = 0;
                }
        }

        this.Draw = function(ctx){
                this.DrawPlayer(ctx);
        }

        this.DrawPlayer = function(ctx){
                switch(this.level){
                        case 0:
                                this.DrawNoob(ctx);
                        break;
                        case 1:
                                this.DrawFirefox(ctx);
                        break;
                }
        }

        this.DrawNoob = function(ctx){
                ctx.drawImage(assets.noob, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.noob.width/5, 1 * assets.noob.height/9, assets.noob.width/5, assets.noob.height/9, this.screenX, this.screenY, canvas.width*0.1, canvas.width*0.1);
        }

        this.DrawFirefox = function(ctx){
                ctx.drawImage(assets.firefox, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.firefox.width/8, 1 * assets.firefox.height/9, assets.firefox.width/8, assets.firefox.height/9, this.screenX, this.screenY, canvas.width*0.1, canvas.width*0.1);
        }
}
