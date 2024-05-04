import React from 'react';
import { DonationList, DonationsHeading, Row, Table, TableCell, TableHeader } from './styles';

interface Donation {
  txDetails: {
    amount: number;
    memos: string[];
  }[];
  time: number;
}

interface RecentDonationsProps {
  donations: Donation[];
}

const RecentDonations: React.FC<RecentDonationsProps> = ({ donations }) => {
  return (
    <Row>
      <DonationsHeading>Recent donations:</DonationsHeading>
      <DonationList>
        <Table>
          <thead>
            <tr>
              <TableHeader>Donation Amount</TableHeader>
              <TableHeader>Datetime</TableHeader>
              <TableHeader>Memo</TableHeader>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, i) => (
              <tr key={i}>
                <TableCell>{donation.txDetails[0].amount} ZEC</TableCell>
                <TableCell>
                  {new Date(donation.time * 1000).toLocaleDateString()}{' '}
                  {new Date(donation.time * 1000).toLocaleTimeString()}
                </TableCell>
                <TableCell>
                  {donation.txDetails[0].memos
                    ? donation.txDetails[0].memos[0]
                    : 'No memo available'}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </DonationList>
    </Row>
  );
};

export default RecentDonations;
