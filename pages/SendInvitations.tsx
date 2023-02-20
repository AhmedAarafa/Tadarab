import React, { useEffect } from 'react';
import SendInvitationsPage from 'modules/Checkout/After checkout/Send invitations/SendInvitationsPage';
import { toggleLoader } from 'modules/_Shared/utils/toggleLoader';

export default function SendInvitations() {

  useEffect(() => {
    toggleLoader('hide');
  }, []);

  return (
    <>
      <SendInvitationsPage />
    </>
  )
}
