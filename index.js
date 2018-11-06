
function distanceFromHqInBlocks(block) {
  const  hq = 42;
  if (block < hq) {
    return hq - block;
  }
  return block - hq;
}

function distanceFromHqInFeet (block) {
  const feetConversion = 264;
   return distanceFromHqInBlocks(block) * feetConversion;
}
  
function distanceTravelledInFeet (startBlock, endBlock) {
  const feetConversion = 264;
    const distance = startBlock - endBlock; {
    if (endBlock > startBlock)
    return endBlock - startBlock;
  }
  return distance * feetConversion
}

function calculateFarePrice (startBlock, endBlock) {
  const feetConversion = 264;
  switch (calculateFarePrice) {
case (calculateFarePrice(400<=0)):
return 'noCharge';

case (calculateFarePrice(2000<=401)):
return '2c *distance';

case (calculateFarePrice(2500<=2000)):
return 'flatFare';

case(calculateFarePrice(distance<2500)):
return 'cannot travel that far';
}
}