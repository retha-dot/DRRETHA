import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactBoxProps {
  icon?: React.ReactNode;
  title: string;
  content?: string;
  isAction?: boolean;
}