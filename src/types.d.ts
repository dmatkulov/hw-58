import React from 'react';

export interface Buttons {
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}