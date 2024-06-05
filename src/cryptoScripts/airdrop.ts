import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { airdropIfRequired } from '@solana-developers/helpers';

// works, but not always. if not work, use https://faucet.solana.com/
export const myAirdop = async (pubKey) => {
  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed',
  );
  const toPubKey = pubKey;
  await airdropIfRequired(
    connection,
    toPubKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
  );
};
