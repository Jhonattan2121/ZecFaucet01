import React from 'react';
import { Container, List, Item, DonationLabel, AmountLabel, Label, Value, Title } from './styles';
interface TxDetails {
  amount: number;
  memos: string[];
}

interface Donation {
  txDetails: TxDetails[];
  time: number;
}

interface RecentDonationsProps {
  donations: Donation[];
}

const RecentDonations: React.FC<RecentDonationsProps> = ({ donations }) => {
  return (
    <Container>
      <Title>Recent donations:</Title>
      <List>
        <Item>
          <DonationLabel>Donation Amount</DonationLabel>
          <AmountLabel>Datetime</AmountLabel>
          <Label>Memo</Label>
        </Item>
        {donations.map((donation, i) => (
          <Item key={i}>
            <Value>{'Donation'}</Value>
            <Value>{donation.txDetails[0].amount} ZEC</Value>
            <Value>{new Date(donation.time * 1000).toLocaleDateString()}</Value>
            <Value>{new Date(donation.time * 1000).toLocaleTimeString()}</Value>
            <Value>
              {donation.txDetails[0].memos
                ? donation.txDetails[0].memos[0]
                : 'No memo available'}
            </Value>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default RecentDonations;
