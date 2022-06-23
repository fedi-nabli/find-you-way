import Sonar from 'raspi-hc-sr04';
let sonar = new Sonar({ triggerPin: 11, echoPin: 13 });
 
const ultrason = () => sonar.read((duration) => {
  let distance = 343.0 * duration / 10000 * .5;
  console.log(`duration: ${ duration } distance: ${ distance }cm`)
  return distance
})

export default ultrason