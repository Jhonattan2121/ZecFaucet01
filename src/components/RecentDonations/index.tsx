import React from 'react';
import { Container, Item, Label, List, Title, Value } from './styles';
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
          <Label>
            <tr>
              <th>Donation Amount</th>
              <th>Datetime</th>
              <th>Memo</th>
            </tr>
          </Label>
          <Value>
            {donations.map((donation, i) => (
              <tr key={i}>
                <td>{donation.txDetails[0].amount} ZEC</td>
                <td>
                  {new Date(donation.time * 1000).toLocaleDateString()}{' '}
                  {new Date(donation.time * 1000).toLocaleTimeString()}
                </td>
                <td>
                  {donation.txDetails[0].memos
                    ? donation.txDetails[0].memos[0]
                    : 'No memo available'}
                </td>
              </tr>
            ))}
          </Value>
        </Item>
      </List>
    </Container>
  );
};

export default RecentDonations;
