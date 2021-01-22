export default () => {
  const game_duration=5*60*1000;
  let endTime = Date.now()+game_duration;
  const minutesElement = document.querySelector(`.game__counter span:first-child`);
  const secondsElement = document.querySelector(`.game__counter span:last-child`);

  function showTime() {
    let currTime = Date.now(); 
    let minutes='00';
	let seconds='00';
	let timeDiff=endTime-currTime;
	if(timeDiff>0){
		let timer=new Date(timeDiff); 
		minutes=timer.getMinutes()<10 ? "0"+timer.getMinutes() : timer.getMinutes();  
		seconds=timer.getSeconds()<10 ? "0"+timer.getSeconds() : timer.getSeconds();  
	}
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
	requestAnimationFrame(showTime);
  }

  window.addEventListener(`popstate`, function(){
	endTime = Date.now()+game_duration;
	showTime();
  }, false);
  
  window.addEventListener(`load`, function(){
	endTime = Date.now()+game_duration;
	showTime();
  }, false);

};  

