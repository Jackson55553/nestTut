import {
  Connection,
  Keypair,
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

const alchemyDev =
  'https://solana-devnet.g.alchemy.com/v2/2SxgvOfByFJ_tmfESBQeRG9X08sFjLCl';
const solanaDev = 'https://api.devnet.solana.com';

export const testAir = async () => {
  const connection = new Connection(alchemyDev, 'confirmed');
  const keypair = await Keypair.generate();

  console.log(keypair.publicKey);
  console.log(keypair.secretKey);

  const airdropSignature = await connection.requestAirdrop(
    keypair.publicKey,
    LAMPORTS_PER_SOL,
  );

  console.log(airdropSignature);

  await connection.confirmTransaction(airdropSignature);
};
