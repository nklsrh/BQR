function Rules(){

        this.time = 0;
        this.level = 1;

        this.levelLength = [109, 200];
        this.objectives = [];

        this.Setup = function(){
                this.time = 0;
                env.tileCount = this.levelLength[this.level - 1];
        }

        this.Update = function(){
                this.time ++;
        }
}
