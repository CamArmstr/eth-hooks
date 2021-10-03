import { Contract, ContractFunction } from 'ethers';
import { useCallback, useMemo, useState } from 'react';

import { useEthersContext } from '~~/context';
import { useMounted } from '~~/helpers/hooks/useMounted';
import { useOnRepetition } from '~~/useOnRepetition';

const DEBUG = false;

/**
 * Enables you to call functions in contracts and read their values.  It helps keep track of them in the local React states
 * 
  ~ Features ~
  - Provide readContracts by loading contracts (see more on ContractLoader.js)
  - Specify the name of the contract, in this case it is "YourContract"
  - Specify the name of the variable in the contract, in this case we keep track of "purpose" variable
  - Pass an args array if the function requires
  - Pass pollTime - if no pollTime is specified, the function will update on every new block
 * @param contractList (Record<string, Contract>) :: a record of contractName/contract
 * @param contractName (string) :: The contract name
 * @param functionName (string) :: The function name in the contract
 * @param functionArgs (any[]) :: arguments to functions
 * @param pollTime (number) :: optional :: if >0 use polling, else use instead of onBlock event
 * @param formatter ((_value: T) => T) :: optional :: function to format the result
 * @param onChange (string) :: optional :: callback to call with the function
 * @returns (<T>) :: generic return type 
 */
export const useContractReader = <T>(
  contractList: Record<string, Contract>,
  contract: { contractName: string; functionName: string; functionArgs: any[] },
  formatter?: (_value: T) => T,
  onChange?: (_value?: T) => void,
  providerKey?: string,
  pollTime?: number
): T | undefined => {
  const isMounted = useMounted();
  const { ethersProvider } = useEthersContext(providerKey);
  const [value, setValue] = useState<T>();

  const contractFunction = useMemo(() => {
    return contractList?.[contract.contractName]?.[contract.functionName] as ContractFunction<T>;
  }, [contract.functionName, contractList?.[contract.contractName]]);

  const callFunction = useCallback(async () => {
    if (contractFunction != null) {
      let newResult: T | undefined = undefined;
      if (contract.functionArgs && contract.functionArgs.length > 0) {
        newResult = await contractFunction(...contract.functionArgs);
      } else {
        newResult = await contractFunction(...contract.functionArgs);
      }

      if (formatter != null) {
        newResult = formatter(newResult);
      }

      if (isMounted()) {
        setValue(newResult);
        onChange?.(newResult);
      }
    }
  }, [contract.functionArgs, contractFunction, formatter, isMounted, onChange]);

  useOnRepetition(callFunction, {
    pollTime,
    leadingTrigger: contractList?.[contract.contractName]?.[contract.functionName] != null,
    provider: ethersProvider,
  });

  return value;
};
