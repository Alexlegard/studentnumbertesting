//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumbrId(stnum){
	var pattern = /^(n|N)\d{8}$/;
	
	if(pattern.test(stnum)){
		return true;
	}
	return false;
}