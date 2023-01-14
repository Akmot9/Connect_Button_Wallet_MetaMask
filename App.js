document.getElementById('button').addEventListener('click', event => {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
        account = accounts[O];
        console.log(account);
    });
});