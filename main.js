// document.getElementByClassName("status").addEventListener("click", setActive);
//
// function setActive(id) {
// 	document.getElementById(id).classList.toggle("current");
// }
document.getElementById("1").addEventListener("click", () => {
	document.getElementById("1").classList.add("current");
	document.getElementById("2").classList.remove("current");
	document.getElementById("3").classList.remove("current");
	document.getElementById("4").classList.remove("current");
	document.getElementById("5").classList.remove("current");
});

document.getElementById("2").addEventListener("click", () => {
	document.getElementById("2").classList.add("current");
	document.getElementById("1").classList.remove("current");
	document.getElementById("3").classList.remove("current");
	document.getElementById("4").classList.remove("current");
	document.getElementById("5").classList.remove("current");
});
document.getElementById("3").addEventListener("click", () => {
	document.getElementById("3").classList.add("current");
	document.getElementById("1").classList.remove("current");
	document.getElementById("2").classList.remove("current");
	document.getElementById("4").classList.remove("current");
	document.getElementById("5").classList.remove("current");
});
document.getElementById("4").addEventListener("click", () => {
	document.getElementById("4").classList.add("current");
	document.getElementById("1").classList.remove("current");
	document.getElementById("2").classList.remove("current");
	document.getElementById("3").classList.remove("current");
	document.getElementById("5").classList.remove("current");
});
document.getElementById("5").addEventListener("click", () => {
	document.getElementById("5").classList.add("current");
	document.getElementById("1").classList.remove("current");
	document.getElementById("2").classList.remove("current");
	document.getElementById("3").classList.remove("current");
	document.getElementById("4").classList.remove("current");
});
