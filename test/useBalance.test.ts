// import { expect } from 'chai';
// import { MockProvider } from 'ethereum-waffle';

import { expect } from 'chai';

import { singleTimeout } from '~test-utils/constants/testConstants';
import { fromEther } from '~test-utils/functions/conversions';
import { getMockProvider } from '~test-utils/harness/getMockProvider';
import { renderTestHook } from '~test-utils/harness/renderTestHook';
import { useBalance } from '~~/useBalance';

// import { getMockProvider } from '~helpers/getMockProvider';
// import { renderTestHook } from '~helpers/renderTestHook';
// import { useBalance } from '~~/useBalance';

describe.skip('useBalance', function () {
  it('When the hook is called, then it returns the initial balance', async () => {
    const mockProvider = getMockProvider();
    const [wallet, secondWallet] = mockProvider.getWallets();
    const hook = renderTestHook(mockProvider, () => useBalance(wallet.address));
    hook.rerender(mockProvider);
    expect(wallet.address).be.not.empty;
    expect(secondWallet.address).be.not.empty;

    await hook.waitForNextUpdate({ timeout: singleTimeout });
    const balance = await wallet.getBalance();
    expect(hook.result.current).be.equal(balance);
  });

  it('When wallet balances changes, then the hook returns the new balance', async () => {
    const mockProvider = getMockProvider();
    const [wallet, secondWallet] = mockProvider.getWallets();
    const hook = renderTestHook(mockProvider, () => useBalance(wallet.address));
    hook.rerender(mockProvider);

    const oldBalance = await wallet.getBalance();

    const valueToSend = fromEther(1);
    // await expect(
    await wallet.sendTransaction({
      to: secondWallet.address,
      value: valueToSend,
    });
    // ).to.changeEtherBalances([wallet], [fromEther(-1)]); // commented out since the waffle chai matcher doesn't work with london hardform

    await hook.waitForNextUpdate({ timeout: singleTimeout });
    const newBalance = await wallet.getBalance();
    expect(hook.result.current).to.equal(newBalance);
    expect(hook.result.current).to.not.equal(oldBalance);
  });
});
