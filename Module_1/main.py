from crypto_utils import Wallet

my_wallet = Wallet('Tunmise')
my_wallet.deposit('ETH', 0.7)
print(my_wallet.view_balance())

# wallet = CryptoWallet('Joseph')
# wallet.deposit('ETH', 0.7)
# wallet.deposit('BTC',0.1)

# print(wallet.view_balance())