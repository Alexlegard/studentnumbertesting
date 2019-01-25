//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
window.onload = pageReady;

function pageReady(){
	var studentnumber1 = "N05364562";
	var studentnumber2 = "N6564";
	var studentnumber3 = "N6842324151";
	var studentnumber4 = "X53241156";
	
	
	
	
	
	
	function checkHumbrId(stnum){
		var pattern = /^(n|N)\d{8}/;
		
		if(pattern.test(stnum)){
			return true;
		}
		return false;
	}
}