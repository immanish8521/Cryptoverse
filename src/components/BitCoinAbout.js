import React from "react";
import "../styles/bitcoinabout.css";

const BitCoinAbout = () => {
  return (
    <div className="bitcoin_about_part">
      <div className="bitcoin_about_part_1">
        <h1>What is Bitcoin?</h1>
        <p>
          Bitcoin is the first digital currency that allows users to send and
          receive money, without the interference of a central bank or
          government. Instead, a network of thousands of peers is controlling
          the transactions; a decentralized system.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <b>Why does bitcoin have value?</b>
          </p>
          <p>
            Bitcoin’s useful qualities (decentralized, borderless, secure)
            aren’t the only reason the coin is worth so much. Due to its
            scarcity (and it’s hard to produce), Bitcoin is often nicknamed
            ‘Digital Gold’, in reference to ‘classic’ physical gold. Like gold,
            Bitcoin also has a finite supply of coins available; there will only
            ever be 21 million bitcoin. And now you know why the creation of new
            bitcoins is also called mining.
          </p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <b>No inflation in bitcoin</b>
          </p>
          <p>
            Bitcoin was invented in response to a few concerns the inventor(s)
            had, such as inflation. Its supply is limited, so one cannot just
            devalue the currency by printing more, as governments often do with
            fiat currencies (USD, EUR, etc.). As people look for alternative
            places to keep their money rather than losing value in a negative
            interest rate account, Bitcoin becomes more appealing. Big global
            companies, such as Tesla and MicroStrategy already purchased serious
            amounts of Bitcoin. And it's only a matter of time that other
            companies will follow. This also ensures that the value remains or
            continues to increase.
          </p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <b>Who built Bitcoin</b>
          </p>
          <p>
            In 2008, Bitcoin was invented by an anonymous person or group named
            Satoshi Nakamoto. In 2009, Bitcoin was released as open-source
            software. Nakamoto’s real identity is still unknown, although there
            are many theories about who it might be. Decentralization is one of
            Bitcoin’s most important principles, and that’s why this anonymity
            is perfectly in line.
          </p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <b>The technology of Bitcoin</b>
          </p>
          <p>
            The Bitcoin blockchain is a database, the so-called ‘ledger’, that
            consists of bitcoin transaction records. For new transactions to be
            added to the ledger, the nodes must agree that the transaction is
            real and valid. The blockchain is public and contains records of all
            the transactions taking place.
          </p>
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <p>
            <b>How to buy bitcoin?</b>
          </p>
          <p>
            Continuing reading
            <a href="" target="_blank">
              this blog article
            </a>
            on how to buy your first bitcoin.
          </p>
        </div>
      </div>
      <div className="bitcoin_about_part_2">
        <h1>Bitcoin Links</h1>
        <div className="bitcoin_links_all">
          <p>
            <b>Website</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Website</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Website</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Bitcointalk</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Explorer</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Github</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Reddit</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>r/Telegram</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
        <hr />
        <div className="bitcoin_links_all">
          <p>
            <b>Telegram</b>
          </p>
          <span>
            <a href="/">bitcoin.org</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BitCoinAbout;
