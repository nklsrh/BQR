function Player(){
        
        this.walkAnim = 0;
        this.screenX, this.screenY;
        this.startRunSpeed = 0;
        this.slowestSpeed = 0.1;
        this.runSpeed = this.startRunSpeed;
        this.jumpStrength = 0;
        this.height = 0;
        this.accY = 0;
        this.level = 0;	//FIREFOX TIME!
        this.stuck = false;
        this.startScreenX = CANVAS_WIDTH * 0.15;
		
        this.Setup = function(){
                this.screenX = CANVAS_WIDTH * 0.15;
                this.screenY = CANVAS_HEIGHT * 0.55;
                this.accY = 0;
                this.jumpStrength = 0;
                this.height = 0;
                this.walkAnim = 0;
                this.runSpeed = this.startRunSpeed;
				this.stuck = false;
        }

        this.Update = function(){
                this.Physics();   
                this.Input();
                this.Walking(); 
                this.Dead();  
                this.FinishLevel(); 
				this.WhackIntoTrees();
        }
        
        this.Physics = function(){
                this.height += this.accY;
                this.accY -= 5;
                this.screenY = ((CANVAS_HEIGHT * 0.6) - this.height);
                
                if(Math.abs(this.accY) > this.height || this.height <= 0){
                        if(env.NoGround[env.currentTile] == 0){
                                this.accY *= 1.5;
                        }
                        else{
                                if(this.height > -100){
                                        this.height = 0;
                                        this.accY = 0;
                                        if(this.runSpeed < this.slowestSpeed)
                                                this.runSpeed = this.slowestSpeed;
                                }
                        }
                }
				
				if(this.stuck){
					//	this.screenX -= this.lastrunSpeed * 100 * (canvas.width/CANVAS_WIDTH);
					this.runSpeed *= 0.4;
					if(this.runSpeed < this.slowestSpeed)
						this.runSpeed = this.slowestSpeed;
				}
        }

		this.lastrunSpeed = this.startRunSpeed;
		
        this.WhackIntoTrees = function(){
			/*if(this.runSpeed > this.startRunSpeed){
				this.lastrunSpeed = this.runSpeed;
			}			
			if(env.NoTree[env.currentTile] == 0){
				if(this.height < canvas.height * 0.3){
					this.stuck = true;
				}
				else{
					this.stuck = false;
				}
			}*/
        }

        this.Input = function(){                
                if(IsJumpButtonDown || S){
                        if(this.jumpStrength < 20)
                                this.jumpStrength = 20;
                        if(this.jumpStrength < 45)
                                this.jumpStrength += 4;
                }
                if((!IsJumpButtonDown || !S) && (WasJumpButtonDown || preS)){
                        this.Jump(this.jumpStrength);
                        WasJumpButtonDown = false;
                        console.log('mouseclicked');
                }

                preS = false;
        }
        
        this.Walking = function(){
                this.walkAnim += (30/FPS);
                if(this.walkAnim > 13)
                        this.walkAnim = 0;

                /*if(this.runSpeed < this.startRunSpeed){
                        if(env.NoGround[env.currentTile] != 0 && this.height < -1){
                                this.accY = -10;
                                this.runSpeed = this.startRunSpeed;    
                        }
                        else{
                                this.runSpeed *= 0.65; 
                        }                        
                }*/
				if(D)
                this.runSpeed += 0.03;
				
				if(this.runSpeed < 0.5)
				this.runSpeed += 0.002;
        }

        this.Dead = function(){
                if(this.height < -400){
                        game.NewGame();
                }
				if(this.screenX < -CANVAS_WIDTH*0.3){
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
                ctx.drawImage(assets.noob, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.noob.width/5, 1 * assets.noob.height/9, assets.noob.width/5, assets.noob.height/9, this.screenX * (canvas.width/CANVAS_WIDTH), this.screenY * (canvas.height/CANVAS_HEIGHT), canvas.width*0.1, canvas.width*0.1);
        }

        this.DrawFirefox = function(ctx){
                ctx.drawImage(assets.firefox, parseInt(this.walkAnim * this.runSpeed) % 4 * assets.firefox.width/8, 1 * assets.firefox.height/9, assets.firefox.width/8, assets.firefox.height/9, this.screenX * (canvas.width/CANVAS_WIDTH), this.screenY * (canvas.height/CANVAS_HEIGHT), canvas.width*0.1, canvas.width*0.1);
        }
}
