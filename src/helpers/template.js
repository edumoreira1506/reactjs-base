import React from 'react';
import Template from '../templates'
import PrivateTemplate from '../templates/PrivateTemplate'

export const withTemplate = element =>
  <Template>
    { element }
  </Template>

export const withAdminTheme = element =>
  <PrivateTemplate>
    { element }
  </PrivateTemplate>
