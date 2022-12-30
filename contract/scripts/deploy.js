const hre = require("hardhat");

const deploy = async () => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const transactions_amount = hre.ethers.utils.parseEther("1");

  const transactions = await hre.ethers.getContractFactory("Transactions");
  const Transactions = await Transactions.deploy(unlockTime, { value: lockedAmount });

  await transactions.deployed();

  console.log(
    `Transactions with 1 ETH and unlock timestamp ${unlockTime} deployed to ${transactions.address}`
  );
}

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}; 

runDeploy();