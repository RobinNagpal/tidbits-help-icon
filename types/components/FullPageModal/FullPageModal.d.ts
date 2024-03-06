import React from 'react';
export interface SingleSectionModalProps {
    open: boolean;
    onClose: () => void;
    title: string | JSX.Element;
    children: React.ReactNode;
    showCloseButton?: boolean;
    fullWidth?: boolean;
}
export default function FullPageModal({ open, title, children, onClose, showCloseButton, fullWidth, }: SingleSectionModalProps): React.JSX.Element;
