import { NFT_CONTRACT_ADDRESS } from './nftContractAddress'
import { TOKEN_CONTRACT_ADDRESS } from './cryptoDevsTokenAddress'
import CryptoDevs from './CryptoDevs.json'
import CryptoDevToken from './CryptoDevToken.json'

const NFT_CONTRACT_ABI = CryptoDevs.abi
const TOKEN_CONTRACT_ABI = CryptoDevToken.abi
export {NFT_CONTRACT_ADDRESS,
NFT_CONTRACT_ABI,
TOKEN_CONTRACT_ADDRESS,
TOKEN_CONTRACT_ABI,}
