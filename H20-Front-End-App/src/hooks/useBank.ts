import { useContext } from 'react';
import { Context as BanksContext } from '../contexts/Banks';
import { Bank, ContractName } from '../ice-water';

const useBank = (contractName: ContractName): Bank => {
  const { banks } = useContext(BanksContext);
  return banks.find((bank) => bank.contract === contractName);
};

export default useBank;