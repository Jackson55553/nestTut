import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import 'dotenv/config';

// const keypair = getKeypairFromEnvironment('PRIVATE_KEY');
// const publicKey = new PublicKey(keypair.publicKey);

// const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

const checkBalance = async (keypair) => {
  const publicKey = new PublicKey(keypair);
  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed',
  );
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol} SOL!`,
  );
  return balanceInSol;
};
export { checkBalance };
