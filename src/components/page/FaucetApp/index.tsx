import React, { useState, useEffect } from 'react';
import http from '../../../http-common';
import ReceiveZec from '../../ReceiveZec';
import FaucetBalance from '../../FaucetBalance';
import RecentDonations from '../../RecentDonations';
import zecFaucetImage from '../../../assets/zecfaucet1.png'; 
import CoinTickerWidget from '../../CoinTickerWidget';
import { Container, Description, Footer, Header, Image, Row } from './styles';
interface Payout {
  u: number;
  z: number;
  t: number;
}

const FaucetApp: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [payout, setPayout] = useState<Payout>({ u: 0, z: 0, t: 0 });
  const [donate, setDonate] = useState<string>('');
  const [donations, setDonations] = useState<[]>([]); 

  useEffect(() => {
    const getFaucetPayout = () => {
      http.get('/payout').then((res) => {
        setPayout(res.data);
      });
    };

    const getDonateAddress = () => {
      http.get('/donate').then((res) => {
        setDonate(res.data);
      });
    };

    const getFaucetBalance = () => {
      http.get('/balance').then((res) => {
        setBalance(res.data);
      });
    };

    const getLatestDonations = () => {
      http.get('/txns').then((res) => {
        setDonations(res.data);
      });
    };

    getFaucetPayout();
    getDonateAddress();
    getFaucetBalance();
    getLatestDonations();

    const updateFaucetBalanceInterval = setInterval(getFaucetBalance, 75 * 1000);
    const updateLatestDonationsInterval = setInterval(getLatestDonations, 75 * 1000);

    return () => {
      clearInterval(updateFaucetBalanceInterval);
      clearInterval(updateLatestDonationsInterval);
    };
  }, []);

  return (
    <Container>
      <Header>Welcome to ZecFaucet.com</Header>
      <Image alt="ZecFaucet.com" src={zecFaucetImage} />

      <ReceiveZec payout={payout} />
      <FaucetBalance balance={balance} donate={donate} />
      <RecentDonations donations={donations} />

      <Row>
        <CoinTickerWidget coinId="zcash" currency="usd" locale="pt" />
      </Row>

      <Description>ZecFaucet.com is not affiliated with ECC or Zcash Foundation.</Description>
      <Footer>© 2024 ZecFaucet.com. All rights reserved.</Footer>
    </Container>
  );
}

export default FaucetApp;
