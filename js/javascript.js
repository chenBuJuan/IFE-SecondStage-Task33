/*javascript*/
var blockState = {
    
    "xIndex" : 6,
    "yIndex" : 5,
    "direction" : "left",
    "rotate" : 0
    
};

var oBlock = document.getElementById("block");
var oLog = document.getElementById("log").getElementsByClassName("mes")[0];

function go(){
    
    switch (blockState.direction){
        
        case "left" : 
            oBlock.style.left = (blockState.xIndex - 1) * 40 + "px";
            blockState.xIndex--;
            break;
        
        case "right" : 
            oBlock.style.left = (blockState.xIndex + 1) * 40 + "px";
            blockState.xIndex++;
            break;
            
        case "top" : 
            oBlock.style.top = (blockState.yIndex - 1) * 40 + "px";
            blockState.yIndex--;
            break;
            
        case "bottom" : 
            oBlock.style.top = (blockState.yIndex + 1) * 40 + "px";
            blockState.yIndex++;
            break;
        
    }
    
}

function tunLef(){
    
    var iRotate = blockState.rotate - 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}

function tunRig(){
    
    var iRotate = blockState.rotate + 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}

function tunBac(){
    
    var iRotate = blockState.rotate + 180;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}

function implement(){
    
    var sValue = document.getElementById("text-input").value.replace(/(^\s+)|(\s+$)/g,"");
    var date = new Date();
    
    switch (true){
        
        case (/^go$/i).test(sValue) : 
        
            if(blockState.xIndex == 1 && blockState.direction == "left" || blockState.xIndex == 10 && blockState.direction == "right" || blockState.yIndex == 1 && blockState.direction == "top" || blockState.yIndex == 10 && blockState.direction == "bottom"){
                
                var newNode = document.createElement("p");
                
                newNode.style.color = "red";
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'执行失败!";
                oLog.appendChild(newNode);
                
                break;
                
            }else{
                
                go();
                
                var newNode = document.createElement("p");
                
                newNode.style.color = "green";
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'执行成功。";
                oLog.appendChild(newNode);
                
                break;
                
            }
            
        case (/^tun lef$/i).test(sValue) : 
        
            tunLef();
            
                var newNode = document.createElement("p");
                
                newNode.style.color = "green";
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'执行成功。";
                oLog.appendChild(newNode);
                
            break;
            
        case (/^tun rig$/i).test(sValue) : 
        
            tunRig();
            
                var newNode = document.createElement("p");
                
                newNode.style.color = "green";
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'执行成功。";
                oLog.appendChild(newNode);
                
            break;
            
        case (/^tun bac$/i).test(sValue) : 
        
            tunBac();
            
                var newNode = document.createElement("p");
                
                newNode.style.color = "green";
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'执行成功。";
                oLog.appendChild(newNode);
                
            break;
            
        default :
            
            var newNode = document.createElement("p");
                
            newNode.style.color = "red";
            
            if(sValue){
                
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+sValue+"'错误!";
                
            }else{
                
                newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 请输入指令!";
                
            }
            
            oLog.appendChild(newNode);
        
    }
    
}

function init(){
    
    var oBtn = document.getElementById("button-input");
    
    oBtn.addEventListener("click",implement);
    
}

init();