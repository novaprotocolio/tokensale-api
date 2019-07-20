'use strict';

const fetch = require('node-fetch');

module.exports = {
  /**
   * index() returns a result for resource (all and paginated)
   * based on passed query parameters
   *
   * @url {{URL}}/transaction
   * @param <String> sortOrder, sortBy, type, description, status
   * @param <String> date
   * @param <Number> amount
   * @param <Integer> pageNumber, recordsPerPage
   * @return <Element> Array of Transactions
   */

  index: function(req, res) {
    const data = {
      status: 'success',
      message: {
        totalSupply: 1298746.5713916372,
        decimals: '18',
        symbol: 'PRFT',
        transfers: false,
        contributors: '49',
        totalWeiRaised: '159246285616000000000',
        firstCheckpoint: 4.7020336e21,
        secondCheckpoint: 9.4040672e21,
        thirdCheckpoint: 1.88081344e22,
        firstCheckpointPrice: 74800000000000000,
        secondCheckpointPrice: 79200000000000000,
        thirdCheckpointPrice: 83600000000000000,
        tokenCap: 1.0686442870752744e24,
        started: true,
        time: 1512133200000,
        transfersEnabled: false
      }
    };
    res.json(data);
  },

  etherPrice: function(req, res) {
    const data = {
      ticker: {
        base: 'ETH',
        target: 'USD',
        price: 318.307689,
        volume: '439673.05228462',
        change: '0.72641775'
      },
      timestamp: 1510284602,
      success: true,
      error: ''
    };
    res.json(data);
  },

  getEther: async function(req, res) {
    const ret = await fetch(
      'https://api.coinmarketcap.com/v1/ticker/ethereum/'
    ).then(ret => ret.json());
    res.json(ret);
  }
};
