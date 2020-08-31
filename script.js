var expand = {kcTextExpand: "kcText",
			  myAgroTextExpand: "myAgroText",
			  unhcrTextExpand: "unhcrText",
			  fbTextExpand: "fbText",
			  wtTextExpand: "wtText",
			  puTextExpand: "puText",
};


window.onload = function() {

	var h = document.getElementsByClassName("textExpand");
	for (i=0; i<h.length; i++){
		h[i].onclick = function(){
			var spanId = this.id;
			var divId = document.getElementById(expand[spanId]);
			
			
			if (divId.style.height === "auto"){
				this.innerHTML = "+ read more"
				divId.style.height = "55px";
			}
			else{
				this.innerHTML = "- read less"
				divId.style.height = "auto";
			}
			
		}
	}
	
	
}