class Game
{
    constructor(root, lib)
    {
        this.root = root;
        this.stage = this.root.stage;
        this.canvas = this.root.canvas;
        this.messageField = this.root.messageField;
        this.lib = lib;
        this.init();
        this.keys ={}; 
    }
    
   init(e){
		
		
		const game = this;
		
        document.addEventListener("keydown", (e) => {
  
    console.log(`Key "${e.key}" pressed [event: keydown]`);
            this.keys[e.key] = true;
  
});
        document.addEventListener("keyup", (e) => {
  
    console.log(`Key "${e.key}" pressed [event: keydown]`);
            this.keys[e.key] = false;
  
});
    
   
   	//Message display field
       
    this.canvas = document.getElementById("gameCanvas");
	this.stage = new createjs.Stage(canvas);
	this.messageField = new createjs.Text("Loading", "bold 24px Arial", "#OOOOOO");
	this.messageField.maxWidth = 1000;
	this.messageField.textAlign = "center";
	this.messageField.textBaseline = "middle";
	this.messageField.x = canvas.width / 2;
	this.messageField.y = canvas.height / 2;
	console.log(this.messageField.text);
       console.log(eval(this.messageField.x = canvas.width / 2));
	}
   
}
 