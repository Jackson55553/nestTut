import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import 'dotenv/config';

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const transaction = new Transaction();

export async function testTrans(from, to, count) {
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: from.publicKey,
    toPubkey: to,
    lamports: count,
  });
  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    from,
  ]);

  console.log(`💸 Finished! Sent ${count} to the address ${to}. `);

  console.log(`Transaction signature is ${signature}!`);
  return signature;
}

// Airdrop instruction

// await airdropIfRequired(
//     connection,
//     publicKey,
//     1 * LAMPORTS_PER_SOL,
//     0.5 * LAMPORTS_PER_SOL,
// );
